import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {BenefactorloginPage} from '../pages/benefactorlogin/benefactorlogin';
import {StudentsloginPage} from '../pages/studentslogin/studentslogin';
import {BenefactorPage} from '../pages/benefactor/benefactor';
import {ScholarsPage} from '../pages/scholars/scholars';
import {SearchPage} from '../pages/search/search';
import {TabsPage} from '../pages/tabs/tabs';
import {StudentsprofilePage} from '../pages/studentsprofile/studentsprofile';
import { UnionbankProvider } from '../providers/unionbank/unionbank';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BenefactorloginPage,
    StudentsloginPage,
    BenefactorPage,
    ScholarsPage,
    SearchPage,
    TabsPage,
    StudentsprofilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BenefactorloginPage,
    StudentsloginPage,
    BenefactorPage,
    ScholarsPage,
    SearchPage,
    TabsPage,
    StudentsprofilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UnionbankProvider
  ]
})
export class AppModule {}
