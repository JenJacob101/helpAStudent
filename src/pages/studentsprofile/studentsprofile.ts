import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { NavController, NavParams, AlertController,ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
  selector: 'page-studentsprofile',
  templateUrl: 'studentsprofile.html',
})

export class StudentsprofilePage {

  public host="http://192.168.43.179";
  public baseURI: string = this.host+"/unionbank/";


  constructor(
    public http: Http,
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl:AlertController,
  	public toastCtrl: ToastController) {
  }

   logout(){
     let confirm = this.alertCtrl.create({
      title: 'Logout',
      message: 'Do you really want to logout?',
      buttons: [
        {
          text: 'No',
          role:'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.parent.parent.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }

   sendFunds() {
    let confirm = this.alertCtrl.create({
      title: 'Pay Tuition Fee',
      message: 'Do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.http.get(this.host+'/unionbank/apis.php')
            .map(res=>res.json())
            .subscribe(data=>{
              var result = data.data;
              var json = JSON.parse(result);
              var status = json.status;
              if(status == "S"){
                  let toast = this.toastCtrl.create({
                  message: 'Tuition succesfully paid',
                  position: 'middle',
                  duration: 3000
                });
                toast.present();
              }
              else{
                let toast = this.toastCtrl.create({
                  message: 'Tuition succesfully paid',
                  position: 'middle',
                  duration: 3000
                });
                toast.present();
              }
            });
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
  	
  }

}