import { Component } from "@angular/core";
import { BookmarksPage } from "../bookmarks/bookmarks";
import {MainPage} from "../main/main";
import {LogoutPage} from "../logout/logout";

@Component({
  selector: 'page-tabs',
  template: `
    <ion-tabs color="primary">
      <ion-tab [root]="mainPage" tabTitle="Home" tabIcon="home"></ion-tab>
      <ion-tab [root]="bookmarksPage" tabTitle="Bookmarks" tabIcon="star"></ion-tab>
      <ion-tab [root]="logoutPage" tabTitle="Logout" tabIcon="log-out"></ion-tab>
    </ion-tabs>
  `
})

export class TabsPage {
  bookmarksPage = BookmarksPage;
  mainPage = MainPage;
  logoutPage = LogoutPage;
}
