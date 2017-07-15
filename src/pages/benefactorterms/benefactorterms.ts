import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-benefactorterms',
  templateUrl: 'benefactorterms.html',
})
export class BenefactortermsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public toastCtrl: ToastController) {
  }

  agree(){
  	let toast = this.toastCtrl.create({
      message: 'The Scholarship Office of your school will contact you soon. Thank you!',
      duration: 3500,
      position:'middle'
    });
    toast.present();
    this.navCtrl.pop();
  }

  disagree(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BenefactortermsPage');
  }

}
