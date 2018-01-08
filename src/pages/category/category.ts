import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";
import { Storage } from '@ionic/storage';
import {DetailsPage} from "../details/details";

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  videos: any;
  category = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    private storage: Storage,
    public loading: LoadingController
  ) {
    this.category = this.navParams.get("category");

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
        this.data.getCategoryData(this.category)
          .subscribe(res => this.videos = res);
      });

      setTimeout(() => {
        loader.dismiss();
      }, 700);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  videoDetails(videoId: string) {
    this.navCtrl.push(DetailsPage, {
      videoId: videoId,
      videos: this.videos
    })
  }

}
