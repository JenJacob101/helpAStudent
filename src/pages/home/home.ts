import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudentsloginPage} from '../studentslogin/studentslogin';
import {BenefactorloginPage} from '../benefactorlogin/benefactorlogin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navStudents(){
  	this.navCtrl.push(StudentsloginPage);
  }

  navBenefactor(){
  	this.navCtrl.push(BenefactorloginPage);
  }

}
