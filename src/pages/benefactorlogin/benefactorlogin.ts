import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BenefactorPage} from '../benefactor/benefactor';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-benefactorlogin',
  templateUrl: 'benefactorlogin.html',
})

export class BenefactorloginPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams) {

  }

  navBenefactor(){
  	this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {

  }

}
