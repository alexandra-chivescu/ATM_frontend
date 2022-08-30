import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {MatDialog} from "@angular/material/dialog";
import {CardAuthSuccessDialogComponent} from "../card-auth-success-dialog/card-auth-success-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-auth',
  templateUrl: './card-auth.component.html',
  styleUrls: ['./card-auth.component.css']
})
export class CardAuthComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private clientService: ClientService,
              public dialog: MatDialog,
              private router: Router) { }

  get cardNumberInput() { return this.signInForm.get('cardNumber'); }
  get pinInput() { return this.signInForm.get('pin'); }
  get cvvInput() { return this.signInForm.get('cvv'); }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'cardNumber': new FormControl('', Validators.required ),
      'pin': new FormControl('', [Validators.required, Validators.min(4), Validators.max(4) ]),
      'cvv': new FormControl('', [Validators.required, Validators.min(3), Validators.max(3) ])
    });
  }

  auth() {
    var cardNumber = this.signInForm.get("cardNumber").value;
    var cvv = this.signInForm.get("cvv").value;
    var pin = this.signInForm.get("pin").value;
    this.clientService.clientAuth(cardNumber, cvv, pin)
      .subscribe(value => {
        console.log(value);
        this.router.navigate(['/client-actions', value]);
      })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CardAuthSuccessDialogComponent, {
      width: '600px',
      height: '600px',
      data: {amount: 0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }
}
