import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudenthomePage} from '../studenthome/studenthome';
import {BenefactorstudentsPage} from '../benefactorstudents/benefactorstudents';
import {SettingstudentsPage} from '../settingstudents/settingstudents';

@Component({
  selector: 'page-studenttabs',
  templateUrl: 'studenttabs.html',
})
export class StudenttabsPage {
	StudenthomePage=StudenthomePage;
	BenefactorstudentsPage=BenefactorstudentsPage;
	SettingstudentsPage=SettingstudentsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	
  }

}
