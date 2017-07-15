import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BenefactorPage} from '../benefactor/benefactor';
import {SearchPage} from '../search/search';
import {ScholarsPage} from '../scholars/scholars';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
	BenefactorPage=BenefactorPage;
	SearchPage=SearchPage;
	ScholarsPage=ScholarsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
