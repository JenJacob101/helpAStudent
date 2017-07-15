import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {ViewstudentPage} from '../viewstudent/viewstudent';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-benefactor',
  templateUrl: 'benefactor.html',
})
export class BenefactorPage {

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

  viewStudent(){
  	this.navCtrl.push(ViewstudentPage);
  }

  ionViewDidLoad() {
    
  }

}
