import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotifyPage } from '../pages/notify/notify';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { NewPostPage } from '../pages/home/new-post/new-post';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    NotifyPage,
    HomePage,
      NewPostPage,
      //ModalContentPage,
    ContactPage,        
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotifyPage,
    ContactPage,
    HomePage,
      NewPostPage,
      //ModalContentPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
