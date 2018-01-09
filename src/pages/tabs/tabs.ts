import { Component } from "@angular/core";
import { BookmarksPage } from "../bookmarks/bookmarks";
import {MainPage} from "../main/main";
import {LogoutPage} from "../logout/logout";
import {NavParams} from "ionic-angular";
import {Storage} from "@ionic/storage";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs color="primary">
      <ion-tab [root]="mainPage" [rootParams]="{id: email}" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="bookmarksPage" [rootParams]="{id: email}" tabTitle="Bookmarks" tabIcon="star"></ion-tab>
      <ion-tab [root]="logoutPage" tabTitle="Logout" tabIcon="log-out"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  email = '';
  bookmarksPage = BookmarksPage;
  mainPage = MainPage;
  logoutPage = LogoutPage;

  constructor(public navParams: NavParams) {
    this.email = navParams.get('email');
  }

  ionViewWillEnter() {

    console.log('Inside tabs', this.email)
  }
}
