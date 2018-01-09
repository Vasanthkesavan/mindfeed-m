import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public nav: NavController, public navParams: NavParams, private data: DataProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onLogin(email, password) {
    this.data.signIn(email, password)
      .subscribe(
        (response) => {
          if(response) {
            this.nav.setRoot(TabsPage, {email: response['email']});
          }
        },
        (error) => {
          console.log(error);
        }
      )
  }
}
