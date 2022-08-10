import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginAdminService} from "./login-admin.service";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
  providers: [LoginAdminService]
})
export class LoginAdminComponent implements OnInit {

  @ViewChild('username') usernameInput: ElementRef;
  @ViewChild('password') passwordInput: ElementRef;

  signInForm: FormGroup;

  constructor(private loginService: LoginAdminService,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null)
    });

    this.signInForm.valueChanges.subscribe(
      (value) => {
        this.loginService.toggleHasValueClass(value['username'], this.renderer, this.usernameInput);
        this.loginService.toggleHasValueClass(value['password'], this.renderer, this.passwordInput);
      }
    );
  }

}
