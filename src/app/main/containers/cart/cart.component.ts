import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(public navCtrl: NavController,public toastController: ToastController,public alertController: AlertController) { }

  ngOnInit() {}
  NavigateToOrders(){
    this.presentToast();
    this.navCtrl.navigateForward('/main/orders')

  }
  async presentToast() {
    const toast = await this.toastController.create({
      header: 'Order Placed Successfully',
      // message: 'Click to Close',
      position: 'bottom',
      duration: 2000,
      cssClass: 'Toast',
      buttons: [
        // {
        //   side: 'start',
        //   icon: 'star',
        //   text: 'Favorite',
        //   handler: () => {
        //     console.log('Favorite clicked');
        //   }
        // },
         {
          text: '',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
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
