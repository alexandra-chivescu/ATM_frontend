import {Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdministratorService} from "../../services/administrator.service";
import {Administrator} from "../../models/administrator.model";
import {HttpErrorResponse} from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthService } from '../admin-authentication/auth.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public hide = true;
  public signInForm: FormGroup;
  public administrator:Administrator;
  public administratorService:AdministratorService
  public hashPassword: string;
  public date;

  constructor(
    private formBuilder : FormBuilder,
    private router : Router,
    private authService : AuthService,
    private adminService:AdministratorService

  ) {
    this.administratorService = this.adminService;
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl('', Validators.required ),
      'password': new FormControl('', [Validators.required, Validators.min(3) ])
    });
  }

  get usernameInput() { return this.signInForm.get('username'); }
  get passwordInput() { return this.signInForm.get('password'); }

  public generateRandomToken() {
    const rand = Math.random().toString(36).substr(2);
    return rand + rand;
  }

public login() : void {

  if (this.signInForm.invalid) {
    return;
  } else {
      this.hashPassword = shajs('sha256').update(this.signInForm.controls['password'].value).digest('hex');
      this.administrator = new Administrator(this.signInForm.controls['username'].value, this.hashPassword);

      this.administratorService.login(this.administrator).subscribe(
        (response: Administrator) => {
          this.administrator = response;
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.generateRandomToken());
          this.router.navigate(['/clients-admin']);
        },
        (error: HttpErrorResponse) => {
          alert("Invalid login credentials.");
        }
      );
    }
}

  pressLogin(event) {
    if(event.key === 'Enter')
      this.login();
  }
}
