import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public loading: LoadingController) {
  }



  ionViewDidLoad() {
    let loader = this.loading.create({
      content: 'Logging Out...'
    });

    loader.present().then(() => {
      this.app.getRootNav().setRoot(HomePage);
    });

      setTimeout(() => {
        loader.dismiss();
      }, 300);

    }
}
