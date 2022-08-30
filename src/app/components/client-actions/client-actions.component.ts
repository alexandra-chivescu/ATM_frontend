import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-client-actions',
  templateUrl: './client-actions.component.html',
  styleUrls: ['./client-actions.component.css']
})
export class ClientActionsComponent implements OnInit {

  public withdrawForm: FormGroup;

  constructor(private clientService: ClientService,
              public route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.withdrawForm = new FormGroup({
      'amount': new FormControl('', Validators.required )
    });
  }

  get amountInput() { return this.withdrawForm.get('amount'); }

  withdraw() {
    this.clientService.withdraw(this.withdrawForm.get('amount').value, this.route.snapshot.paramMap.get('token'), Number.parseInt(this.route.snapshot.paramMap.get('id')))
      .subscribe(value => {
        console.log(value);
        this.snackBar.open("Withdraw performed successfully: " + this.withdrawForm.get('amount').value + " RON")
      })

  }
}
