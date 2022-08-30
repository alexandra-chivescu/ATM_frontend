import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../admin-authentication/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerHeight: any;
  innerWidth: any;

  constructor() {
    this.innerHeight = "100%";
    this.innerWidth = "100%";
    console.log("Height" + this.innerHeight + " Width: " + this.innerWidth);
  }

  ngOnInit() {

  }

}
