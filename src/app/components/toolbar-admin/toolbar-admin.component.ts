import { Component, OnInit } from '@angular/core';
import {AuthService} from "../admin-authentication/auth.service";

@Component({
  selector: 'app-toolbar-admin',
  templateUrl: './toolbar-admin.component.html',
  styleUrls: ['./toolbar-admin.component.css']
})
export class ToolbarAdminComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logout() {
    this.authService.logout();
  }

}
