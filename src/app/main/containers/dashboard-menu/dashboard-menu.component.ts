import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss'],
})
export class DashboardMenuComponent implements OnInit {

  constructor(public alertController: AlertController,public toastController: ToastController,public navCtrl: NavController) { }

  ngOnInit() {}  
  async AddToCartPopup(DishName) {
    const alert = await this.alertController.create({
      header: DishName,
      message: `
      <div>Select Quantity </div>
      <span class="minus">-</span>
      <span class="i" type="text">1</span class="i">
      <span class="plus">+</span>
      <br><br>
      <div>Delivery Notes </div>
      `,
      inputs: [
     
        {
          type: 'text',
          
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          //  this.AddedToCart(DishName);
          }
        },
        {
          text: 'Add To Cart',
          cssClass: 'text-light',
          handler: (blah) => {
            console.log(blah);
           this.AddedToCart(DishName);
          }
        },
       
      ]
    });

    await alert.present();
  }
  async AddedToCart(DishName){
    const alert = await this.alertController.create({
      header: DishName,
      message: `
      <span>
      <ion-icon name="checkbox-outline"></ion-icon>
      <span>Added To Cart</span>
      </span> 
      `,
      cssClass: 'AddedToCart',
      buttons: [
        {
          text: 'Keep Browsing',
          cssClass:'AddedToCartBtnAlign',
          handler: (blah) => {
            console.log(blah);
          this.presentToast();
          }
        },
        {
          text: 'Checkout',
          cssClass:'AddedToCartBtnAlignchckout',
          handler: (blah) => {
            console.log(blah);
            this.navCtrl.navigateForward('/main/cart')

          }
        },
  
      ]
    });

    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create({
      header: 'View Cart: 1 Item',
      // message: 'Click to Close',
      position: 'bottom',
      cssClass: 'Toast',
      duration: 3000,
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
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.navCtrl.navigateForward('/main/cart')
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
