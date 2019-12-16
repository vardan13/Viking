// core services
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from './containers/dashboard-menu/dashboard-menu.component';
import { CartComponent } from './containers/cart/cart.component';
import { OrdersListComponent } from './containers/orders-list/orders-list.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { InfoComponent } from './containers/info/info.component';
// main components

// import {SubjectSyllabusComponent} from './containers/syllabus/subject-syllabus/subject-syllabus.component'
const routes: Routes = [
  { path: '', redirectTo: 'dashboard-menu', pathMatch: 'full' },
 {path:'dashboard-menu',component:DashboardMenuComponent},
 {path:'cart',component:CartComponent},
 {path:'orders',component:OrdersListComponent},
 {path:'sign_up',component:SignUpComponent},
 {path:'Forgot',component:ForgotPasswordComponent},
 {path:'info',component:InfoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }