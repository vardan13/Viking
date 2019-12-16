import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {

  constructor(public alertController: AlertController,public toastController: ToastController,public navCtrl: NavController) { }

  ngOnInit() {}
  async logoutMsg(){
   
    const alert = await this.alertController.create({
      header: 'Are you sure you want to logout?',
   
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          //  this.AddedToCart(DishName);
          }
        },
        {
          text: 'Yes',
          handler: (blah) => {
            console.log(blah);
         this.navCtrl.navigateRoot('/home')
          }
        },
       
      ]
    });

    await alert.present();
  }
}
