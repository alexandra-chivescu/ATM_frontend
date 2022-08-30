import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {LoginAdminComponent} from './components/login-admin/login-admin.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {HomeComponent} from './components/home/home.component';
import {ClientsAdminComponent} from './components/clients-admin/clients-admin.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSliderModule} from "@angular/material/slider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ToolbarAdminComponent} from './components/toolbar-admin/toolbar-admin.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {AuthGuard} from './components/admin-authentication/auth.guard';
import {AtmFundsComponent} from './components/atm-funds/atm-funds.component';
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { CardAuthComponent } from './components/card-auth/card-auth.component';
import { CardAuthSuccessDialogComponent } from './components/card-auth-success-dialog/card-auth-success-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ClientActionsComponent } from './components/client-actions/client-actions.component';
import { ToolbarClientComponent } from './components/toolbar-client/toolbar-client.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login-admin', component: LoginAdminComponent},
  {path: 'clients-admin', component: ClientsAdminComponent, canActivate: [AuthGuard]},
  {path: 'card-auth', component: CardAuthComponent},
  {path: 'atm-funds', component: AtmFundsComponent},
  {path: 'client-actions', component: ClientActionsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginAdminComponent,
    HomeComponent,
    ClientsAdminComponent,
    ToolbarAdminComponent,
    AtmFundsComponent,
    CardAuthComponent,
    CardAuthSuccessDialogComponent,
    ClientActionsComponent,
    ToolbarClientComponent
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
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
