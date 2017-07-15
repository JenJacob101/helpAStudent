import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudentsprofilePage} from '../studentsprofile/studentsprofile';


@Component({
  selector: 'page-scholars',
  templateUrl: 'scholars.html',
})
export class ScholarsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navProfile(){
  	this.navCtrl.push(StudentsprofilePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScholarsPage');
  }


}
