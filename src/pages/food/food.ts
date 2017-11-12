import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';


import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';



@Component({
  selector: 'page-food',
  templateUrl: 'food.html'  
})

export class FoodPage {
  myMessage;

  public myOtherMessage$: Observable<MqttMessage>;

  constructor(private _mqttService: MqttService) {
    this._mqttService.observe('mqtt-out').subscribe((message: MqttMessage) => {
      this.myMessage = message.payload.toString();
    });
    this.myOtherMessage$ = this._mqttService.observe('mqtt-out');
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

}


