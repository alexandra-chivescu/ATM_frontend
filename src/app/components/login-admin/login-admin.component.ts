import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdministratorService} from "../../services/administrator.service";
import {Administrator} from "../../models/administrator.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public hide = true;
  public signInForm: FormGroup;
  public administrator:Administrator;

  constructor(private administratorService : AdministratorService) {
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl('', Validators.required ),
      'password': new FormControl('', [Validators.required, Validators.min(3) ])
    });
  }

  get usernameInput() { return this.signInForm.get('username'); }
  get passwordInput() { return this.signInForm.get('password'); }

  public getAdministratorCredentials() : void {

    console.log("Username value: " + this.signInForm.controls['username'].value);
    console.log("Password value: " + this.signInForm.controls['password'].value);
    this.administratorService.getAdministratorCredentials(this.administrator).subscribe(
      (response:Administrator) => {
        this.administrator = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
