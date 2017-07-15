import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-interested',
  templateUrl: 'interested.html',
})

export class InterestedPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public toastCtrl: ToastController,
    public alertCtrl:AlertController) {
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
