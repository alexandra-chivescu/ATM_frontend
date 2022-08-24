import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import {RouterModule, Routes} from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { HomeComponent } from './components/home/home.component';
import { ClientsAdminComponent } from './components/clients-admin/clients-admin.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarAdminComponent } from './components/toolbar-admin/toolbar-admin.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'panel-admin', component: PanelAdminComponent },
  { path: 'clients-admin', component: ClientsAdminComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    PanelAdminComponent,
    HomeComponent,
    ClientsAdminComponent,
    ToolbarAdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    FlexLayoutModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
