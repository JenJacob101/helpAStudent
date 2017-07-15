import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewstudentPage} from '../viewstudent/viewstudent';

/**
 * Generated class for the BenefactorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-benefactor',
  templateUrl: 'benefactor.html',
})
export class BenefactorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  viewStudent(){
  	this.navCtrl.push(ViewstudentPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefactorPage');
  }

}
