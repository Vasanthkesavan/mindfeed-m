import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {DomSanitizer} from "@angular/platform-browser";
import {CategoryPage} from "../category/category";
import {SubCategoryPage} from "../sub-category/sub-category";

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

  ionViewWillEnter() {
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
          console.log('Liked prop', this.liked)
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

  loadCategory(category: string) {
    this.navCtrl.push(CategoryPage, {
      category: category
    })
  }

  loadSubCategory(subcategory: string) {
    this.navCtrl.push(SubCategoryPage, {
      subcategory: subcategory
    })
  }

  likeVideo(videoId: string, email: string, liked: boolean) {
    if(this.liked === true) {
      this.data.likeVideo(videoId, email, JSON.stringify(liked))
        .subscribe(
          (response) => {
            this.liked = false;
          },
          (error) => {
            console.log(error);
          }
        )
    } else {
      this.data.likeVideo(videoId, email, JSON.stringify(liked))
        .subscribe(
          (response) => {
            this.liked = true;
            this.disliked = false;
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }

  dislikeVideo(videoId: string, email: string, disliked: boolean) {
    if(this.disliked === true) {
      this.data.dislikeVideo(videoId, email, JSON.stringify(disliked))
        .subscribe(
          (response) => {
            this.disliked = false;
          },
          (error) => {
            console.log(error);
          }
        )
    } else {
      this.data.dislikeVideo(videoId, email, JSON.stringify(disliked))
        .subscribe(
          (response) => {
            this.disliked = true;
            this.liked = false;
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }

  bookmarkVideo(videoId: string, email: string, bookmarked: boolean) {
    if(this.bookmarked === true) {
      this.data.bookmarkVideo(videoId, email, JSON.stringify(bookmarked))
        .subscribe(
          (response) => {
            this.bookmarked = false;
          },
          (error) => {
            console.log(error);
          }
        )
    } else {
      this.data.bookmarkVideo(videoId, email, JSON.stringify(bookmarked))
        .subscribe(
          (response) => {
            this.bookmarked = true;
          },
          (error) => {
            console.log(error);
          }
        )
    }
  }
}
