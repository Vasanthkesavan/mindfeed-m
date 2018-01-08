import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  liked: boolean;
  disliked: boolean;
  bookmarked: boolean;
  videoTitle: string;
  summary: string;
  otherVideos: any;
  videoId = '';
  email = 'a@gmail.com';
  linkType = '';
  category = '';
  subCategory = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: DataProvider,
    private sanitizer: DomSanitizer) {
    this.videoId = navParams.get("videoId");
    this.otherVideos = navParams.get("videos");
  }

  ionViewDidLoad() {
    this.data.getVideoData(this.email, this.videoId)
      .subscribe(
        (response) => {
          this.liked = response['liked'];
          this.disliked = response['disliked'];
          this.bookmarked = response['bookmarked'];
          this.videoTitle = response['video'][0]['title'];
          this.summary = response['video'][0]['description'];
          this.linkType = response['video'][0]['linkType'];
          this.category = response['video'][0]['category'];
          this.subCategory = response['video'][0]['subcategory'];
        },
        (error) => {
          console.log(error);
        }
      )
  }

  cleanUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  videoDetails(videoId: string) {
    this.navCtrl.push(DetailsPage, {
      videoId: videoId,
      videos: this.otherVideos
    })
  }

}
