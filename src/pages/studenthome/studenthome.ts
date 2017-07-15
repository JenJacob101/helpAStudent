import { Component } from '@angular/core';
import { NavController, NavParams, AlertController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-studenthome',
  templateUrl: 'studenthome.html',
})
export class StudenthomePage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
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

  ionViewDidLoad() {
  	
  }

}
