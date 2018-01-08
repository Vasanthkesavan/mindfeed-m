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
    return this.http.get('http://34.239.113.213/api/getInitialdata');
  }

  getVideoData(email: string, videoId: string) {
    return this.http.get('http://34.239.113.213/api/getVideoData', {params: {videoId: videoId, email: email}});
  }
}
