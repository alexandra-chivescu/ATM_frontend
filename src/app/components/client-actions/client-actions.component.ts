import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Client} from "../../models/client.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.css']
})
export class ClientActionsComponent implements OnInit {

  public withdrawForm: FormGroup;
  public balanceAmount: number;
  public clientId: number;

  constructor(private clientService: ClientService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      'amount': new FormControl('', Validators.required )
    });
    this.clientId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.balance();
  }

  get amountInput() { return this.withdrawForm.get('amount'); }

  public withdraw() {
    this.clientService.withdraw(this.withdrawForm.get('amount').value, this.route.snapshot.paramMap.get('token'), this.clientId)
      .subscribe(value => {
        //console.log(value);
        this.balance();
        this.snackBar.open("Withdraw performed successfully: " + this.withdrawForm.get('amount').value + " RON" , "OK",  { duration: 2500 })
      })

  }

  public balance() {
    this.clientService.balance(this.clientId)
      .subscribe( response => {
          this.balanceAmount = response;
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        })

  }
}
