import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdministratorService} from "../../services/administrator.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {DialogRef} from "@angular/cdk/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent implements OnInit {

  public saveNewClientForm: FormGroup;
  constructor(private administratorService : AdministratorService,
              private dialogRef : DialogRef,
              private snackBar: MatSnackBar) { }

  get firstNameInput() { return this.saveNewClientForm.get('firstName'); }
  get lastNameInput() { return this.saveNewClientForm.get('lastName'); }
  get emailInput() { return this.saveNewClientForm.get('email'); }
  get bankNameInput() { return this.saveNewClientForm.get('bankName'); }
  get pinInput() { return this.saveNewClientForm.get('pin'); }
  get cvvInput() { return this.saveNewClientForm.get('cvv'); }


  ngOnInit(): void {
    this.saveNewClientForm = new FormGroup({
      'firstName': new FormControl('', Validators.required ),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'bankName': new FormControl('', Validators.required),
      'pin': new FormControl('', [Validators.required]),
      'cvv': new FormControl('', [Validators.required])
    });
  }

  addClient() {
    var firstName = this.saveNewClientForm.get("firstName").value;
    var lastName = this.saveNewClientForm.get("lastName").value;
    var email = this.saveNewClientForm.get("email").value;
    var bankName = this.saveNewClientForm.get("bankName").value;
    var pin = this.saveNewClientForm.get("pin").value;
    var cvv = this.saveNewClientForm.get("cvv").value;

    this.administratorService.addClient(firstName, lastName, email, bankName, pin, cvv)
      .subscribe(
        {
          next: _ => {
            this.dialogRef.close();
            this.snackBar.open("New Client successfully added.", "OK", { duration: 2500 })
          },
          error: (error: HttpErrorResponse) => alert("Invalid data for the new user")
        })
  }

}
