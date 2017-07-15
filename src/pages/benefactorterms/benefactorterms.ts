import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-benefactorterms',
  templateUrl: 'benefactorterms.html',
})
export class BenefactortermsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
  }

  logout(){
     let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you really want to logout?',
      buttons: [
        {
          text: 'No',
          role:'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.parent.parent.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }

  agree(){
  	let toast = this.toastCtrl.create({
      message: 'The Scholarship Office of your school will contact you soon. Thank you!',
      duration: 3500,
      position:'middle'
    });
    toast.present();
    this.navCtrl.pop();
  }

  disagree(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

  }

}
