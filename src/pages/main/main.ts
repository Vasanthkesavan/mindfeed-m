import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  videos:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    private storage: Storage,
    public loading: LoadingController
  ) {}

  ionViewWillEnter() {
    this.data.getInitialData()
      .subscribe(
        (response) => {
          this.videos = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }

}
