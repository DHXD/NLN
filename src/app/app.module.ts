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

import {
  /*MqttMessage,
  MqttModule,
  MqttService,*/
  MqttServiceOptions,
  /*OnMessageEvent*/
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'broker.mqttdashboard.com',
  port: 8000,
  path: '/mqtt'
};
/*
export const MQTT_SERVICE_OPTIONS: MqttServiceOptions  = {
  hostname: 'test.mosquitto.org',
  port: 8080,
  path: '/mqtt'
};
*/


export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';



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
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    })
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
