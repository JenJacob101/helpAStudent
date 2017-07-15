import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudenttabsPage} from '../studenttabs/studenttabs';

@Component({
  selector: 'page-studentslogin',
  templateUrl: 'studentslogin.html',
})
export class StudentsloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loginStudent(){
  	this.navCtrl.push(StudenttabsPage);
  }

  ionViewDidLoad() {

  }

}
