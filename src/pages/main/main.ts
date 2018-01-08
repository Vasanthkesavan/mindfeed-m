import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { Storage } from '@ionic/storage';
import {DetailsPage} from "../details/details";

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  videos:any;
  bookmarks = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    private storage: Storage,
    public loading: LoadingController
  ) {
    let email = {"email": "a@gmail.com"};
    localStorage.setItem('email',JSON.stringify(email));

    let loader = this.loading.create({
      content: 'Getting videos.. '
    });

    loader.present().then(() => {
      this.storage.get('videos').then((val) => {
        if(val) {
          this.videos = val;
        } else {
          this.videos = [];
          this.storage.set('videos', this.videos);
          console.log('running the stuff for first time')
        }
        this.data.getInitialData()
          .subscribe(res => this.videos = res);
      });

      this.storage.get('bookmarks').then((val) => {
        if(!val) {
          this.storage.set('bookmarks', this.bookmarks)
        } else {
          this.bookmarks = val;
        }
      })

      setTimeout(() => {
        loader.dismiss();
      }, 700);

    })
  }

  videoDetails(videoId: string) {
    this.navCtrl.push(DetailsPage, {
      videoId: videoId,
      videos: this.videos
    })
  }
}
