import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

/**
 * Generated class for the BookmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksPage {
  localStorage: any;
  videos: any;
  on = true;
  email = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private data: DataProvider) {
    this.email = navParams.get('id');
  }

  ionViewWillEnter() {
    this.data.getAllBookmarkedVideo(this.email)
      .subscribe(
        (response) => {
          this.videos = response['videos'];
          console.log(this.videos)
        },
        (error) => {
          console.log(error);
        }
      )
  }

  removeBookmark(email, videoId) {
    this.data.removeBookmark(email, videoId)
      .subscribe(
        (response) => {
          this.on = false;
        }
      )
  }
}
