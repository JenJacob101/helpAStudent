import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-interested',
  templateUrl: 'interested.html',
})

export class InterestedPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public toastCtrl: ToastController) {
  }

  sendMessage(){
  	let toast = this.toastCtrl.create({
      message: 'Message successfully sent!',
      duration: 2500,
      position:'middle'
    });
    toast.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

  }

}
