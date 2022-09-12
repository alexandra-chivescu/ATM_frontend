import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdministratorService} from "../../services/administrator.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {DialogRef} from "@angular/cdk/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NewClientDto} from "../../models/newClientDto.model";

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent implements OnInit {

  public saveNewClientForm: FormGroup;
  public newClient : NewClientDto = new NewClientDto();
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
    this.newClient.firstName = this.saveNewClientForm.get("firstName").value;
    this.newClient.lastName = this.saveNewClientForm.get("lastName").value;
    this.newClient.email = this.saveNewClientForm.get("email").value;
    this.newClient.bankName = this.saveNewClientForm.get("bankName").value;
    this.newClient.pin = this.saveNewClientForm.get("pin").value;
    this.newClient.cvv = this.saveNewClientForm.get("cvv").value;

    this.administratorService.addClient(this.newClient)
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
