import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
     private router: Router, public loadingCtrl: LoadingController, public navCtrl: NavController 
      ) {}
  submitusername(){
   this.navCtrl.navigateForward('/main/dashboard-menu')
  }
  SignUp(){
    this.navCtrl.navigateForward('/main/sign_up')

  }
  forgetpassword(){
    this.navCtrl.navigateForward('/main/Forgot')

  }
}
