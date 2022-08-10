import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login-admin', pathMatch: 'full' }, /*should change to home*/
  { path: 'login-admin', component: LoginAdminComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
