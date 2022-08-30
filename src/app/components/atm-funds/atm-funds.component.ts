import { Component, OnInit } from '@angular/core';
import {Atm} from "../../models/atm.model";
import {Client} from "../../models/client.model";
import {HttpErrorResponse} from "@angular/common/http";
import {AdministratorService} from "../../services/administrator.service";
import {Banknote} from "../../models/banknote.model";
import {BanknoteFund} from "../../models/banknoteFund.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-atm-funds',
  templateUrl: './atm-funds.component.html',
  styleUrls: ['./atm-funds.component.css']
})
export class AtmFundsComponent implements OnInit {

  public atms: Atm[];
  public selectedAtm: Atm;
  public bankNotes: (string | Banknote)[];
  public banknoteFunds: BanknoteFund;
  constructor( private administratorService: AdministratorService,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.bankNotes = Object.values(Banknote).filter((item) => {
      return isNaN(Number(item));
    });
    this.getAtms();
  }

  public getAtms() : void {
    this.administratorService.getAtms().subscribe
    (
      (response: Atm[]) => {
        this.atms = response;
        // this.selectedAtm = this.atms[0];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addFunds() : void {
    this.administratorService.addFunds(this.selectedAtm).subscribe
    (
      (response: BanknoteFund[]) => {
        this.selectedAtm.banknoteFunds = response;
        console.log(this.selectedAtm.banknoteFunds);
        this.snackBar.open('Funds were added successfully')
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateSelected(atm: Atm) {
    this.selectedAtm = atm;
    console.log(this.selectedAtm);
  }
}
