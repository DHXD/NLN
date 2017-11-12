import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NotifyPage } from '../pages/notify/notify';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { NewPostPage } from '../pages/home/new-post/new-post';

import { TabsPage } from '../pages/tabs/tabs';
import { FarmPage }     from '../pages/farm/farm';
  import { FarmIoT }     from '../pages/farm/farm-iot';
  import { FarmStock }     from '../pages/farm/farm-stock';
  import { FarmGAP }     from '../pages/farm/farm-gap';

import { ShopPage }     from '../pages/shop/shop';
import { FoodPage }     from '../pages/food/food';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { HttpModule } from '@angular/http';


//import {AppComponent} from './app.component';
import {GaugesModule} from 'ng-canvas-gauges/lib';



export const MQTT_SERVICE_OPTIONS = {
  hostname: 'broker.mqttdashboard.com',
  port: 8000,
  path: '/mqtt'
};


/*
export const MQTT_SERVICE_OPTIONS: MqttServiceOptions  = {
  hostname: '172.16.0.100',
  port: 1883,
  path: '/mqtt'
};
*/



export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

import {  
  MqttModule,
  MqttService
} from 'ngx-mqtt';



@NgModule({
  declarations: [
    MyApp,    
    TabsPage,
      NotifyPage,
      HomePage,
        NewPostPage,
        //ModalContentPage,
      ContactPage,        
    FarmPage,
      FarmIoT,
      FarmStock,
      FarmGAP,
    ShopPage,
    FoodPage
    //AppComponent    // gauge module
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    }),
    GaugesModule      // gauge module
  ],
  bootstrap: [
    IonicApp     
  ],    
  entryComponents: [
    MyApp,    
    TabsPage,
      NotifyPage,
      ContactPage,
      HomePage,
        NewPostPage,
        //ModalContentPage,
    FarmPage,
      FarmIoT,
      FarmStock,
      FarmGAP,
    ShopPage,
    FoodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ]
})
export class AppModule {}
