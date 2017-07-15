import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InterestedPage} from '../interested/interested';


@Component({
  selector: 'page-viewstudent',
  templateUrl: 'viewstudent.html',
})
export class ViewstudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  interested(){
  	this.navCtrl.push(InterestedPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewstudentPage');
  }

}
