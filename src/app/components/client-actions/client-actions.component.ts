import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, Subscription, takeUntil} from "rxjs";
import {WithdrawDto} from "../../models/withdrawDto.model";
import {MatDialog} from "@angular/material/dialog";
import {WithdrawSuccessDialogComponent} from "../withdraw-success-dialog/withdraw-success-dialog.component";

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.css']
})
export class ClientActionsComponent implements OnInit, OnDestroy {

  public notifier = new Subject();
  public subscription: Subscription;
  public withdrawForm: FormGroup;
  public depositForm: FormGroup;
  public balanceAmount: number;
  public clientId: number;
  public token: string;
  public banknotes: WithdrawDto;
  public map: Map<string, number> = new Map<string, number>();
  public errors: any;

  constructor(private clientService: ClientService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("cardAuthToken");
    if (this.token === null) {
      this.router.navigate(['/home']);
    }
    this.withdrawForm = new FormGroup({
      'amount': new FormControl('', Validators.required )
    });
    this.depositForm = new FormGroup({
      'amountToDeposit': new FormControl('', Validators.required )
    });
    this.clientId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.balance();
  }

  get amountInput() { return this.withdrawForm.get('amount');}
  get amountToDepositInput() { return this.depositForm.get('amountToDeposit');}

  public withdraw() {
    this.errors = null;
    this.clientService.withdraw(this.withdrawForm.get('amount').value, this.token, this.clientId)
      .pipe(takeUntil(this.notifier))
      .subscribe( {
        next: (response:WithdrawDto)=> {
        this.balance();
        this.banknotes = response;
        Object.keys(response.banknotes)
          .forEach(key => this.map.set(key, response.banknotes[key]));
         this.openDialog() },
        error: (error) => {
          this.errors = error;
          alert(this.errors.error.message);
        }
      })
  }

  public balance() {
    this.clientService.balance(this.clientId)
      .pipe(takeUntil(this.notifier))
      .subscribe({
          next: (response) => this.balanceAmount = response,
          error: (error) => alert(error.message)
      })
  }

  public deposit() {
    this.clientService.deposit(this.depositForm.get('amountToDeposit').value, this.token, this.clientId)
      .pipe(takeUntil(this.notifier))
      .subscribe(_ => {
        this.balance();
        this.snackBar.open("Deposit performed successfully: " + this.depositForm.get('amountToDeposit').value + " RON" , "OK",  { duration: 2500 })
      })

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WithdrawSuccessDialogComponent, {
      width: '500px',
      height: '500px'
    });
    dialogRef.componentInstance.map = this.map;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

  ngOnDestroy(): void {
    this.notifier.next(true);
    this.notifier.complete();
  }
}
