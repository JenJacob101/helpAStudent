import { Component } from '@angular/core';
import { NavController, NavParams, AlertController,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-studentsprofile',
  templateUrl: 'studentsprofile.html',
})

export class StudentsprofilePage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl:AlertController,
  	public toastCtrl: ToastController) {
  }

   sendFunds() {
    let confirm = this.alertCtrl.create({
      title: 'Pay Tuition Fee',
      message: 'Do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: () => {
	      		let toast = this.toastCtrl.create({
		      	message: 'Tuition succesfully paid',
		      	position: 'middle',
		      	duration: 3000
		    });
		    toast.present();
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
  	
  }

}