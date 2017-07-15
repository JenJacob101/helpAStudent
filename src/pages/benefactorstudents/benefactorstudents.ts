import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BenefactortermsPage} from '../benefactorterms/benefactorterms';


@Component({
  selector: 'page-benefactorstudents',
  templateUrl: 'benefactorstudents.html',
})
export class BenefactorstudentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navBenefactor(){
  	this.navCtrl.push(BenefactortermsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefactorstudentsPage');
  }

}
