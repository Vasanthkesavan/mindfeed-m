import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  /* Get the sample data as initial data */
  getInitialData() {
    return this.http.get('http://34.239.113.213/api/getTopVideos');
  }

  getVideoData(email: string, videoId: string) {
    return this.http.get('http://34.239.113.213/api/getVideoData', {params: {videoId: videoId, email: email}});
  }

  getCategoryData(category: string) {
    return this.http.get('http://34.239.113.213/api/getCategoryData', {params: {category: category}});
  }

  getSubCategoryData(subcategory: string) {
    return this.http.get('http://34.239.113.213/api/getSubCategoryData', {params: {subcategory: subcategory}});
  }

  likeVideo(videoId: string, email: string, like: string) {
    return this.http.get('http://34.239.113.213/api/likeVideo', {params: {videoId: videoId, email: email, like: like}});
  }

  dislikeVideo(videoId: string, email: string, dislike: string) {
    return this.http.get('http://34.239.113.213/api/dislikeVideo', {params: {videoId: videoId, email: email, dislike: dislike}});
  }

  bookmarkVideo(videoId: string, email: string, bookmark: string) {
    return this.http.get('http://34.239.113.213/api/bookmarkVideo', {params: {videoId: videoId, email: email, bookmark: bookmark}});
  }

  getAllBookmarkedVideo(email: string) {
    return this.http.get('http://34.239.113.213/api/getAllBookmarkedVideo', {params: {email: email}});
  }
}
