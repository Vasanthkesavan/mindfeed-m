import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { DataProvider } from '../providers/data/data';
import {MainPage} from "../pages/main/main";
import { IonicStorageModule } from "@ionic/storage";
import {TabsPage} from "../pages/tabs/tabs";
import {BookmarksPage} from "../pages/bookmarks/bookmarks";
import {LogoutPage} from "../pages/logout/logout";

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    TabsPage,
    BookmarksPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    TabsPage,
    BookmarksPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
