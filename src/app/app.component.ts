import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {BenefactorloginPage} from '../pages/benefactorlogin/benefactorlogin';
import {StudentsloginPage} from '../pages/studentslogin/studentslogin';
import {BenefactorPage} from '../pages/benefactor/benefactor';
import {ScholarsPage} from '../pages/scholars/scholars';
import {SearchPage} from '../pages/search/search';
import {TabsPage} from '../pages/tabs/tabs';
import {StudentsprofilePage} from '../pages/studentsprofile/studentsprofile';
import {UnionbankProvider} from '../providers/unionbank/unionbank';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

