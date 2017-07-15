import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {BenefactortermsPage} from '../benefactorterms/benefactorterms';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-benefactorstudents',
  templateUrl: 'benefactorstudents.html',
})
export class BenefactorstudentsPage {

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

  navBenefactor(){
  	this.navCtrl.push(BenefactortermsPage);
  }

  ionViewDidLoad() {
    
  }

}
