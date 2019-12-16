
import { NgModule } from '@angular/core';
import { DashboardMenuComponent } from './containers/dashboard-menu/dashboard-menu.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { CartComponent } from './containers/cart/cart.component';
import { OrdersListComponent } from './containers/orders-list/orders-list.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { InfoComponent } from './containers/info/info.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MainRoutingModule ,
    
    
  ],
  declarations: [
    DashboardMenuComponent,CartComponent,OrdersListComponent,SignUpComponent,ForgotPasswordComponent,InfoComponent
  ],
  entryComponents:[],
  providers: [
 
  ],
})
export class MainModule { }
