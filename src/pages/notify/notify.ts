import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {ModalController} from 'ionic-angular';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { RestApiProvider } from '../../providers/rest-api/rest-api';
//var database_json = '/database.json';
var database_json = 'http://nguoilamnong.vn/mxh/json';

interface ItemsResponse {  
  friendRequest: string[];
}

import {
  MqttMessage,
  MqttModule,
  MqttService
} from 'ngx-mqtt';

@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html'
})

export class NotifyPage implements OnInit {
  cards = [];
  data_results: string[];
  
  apiUrl = 'https://reqres.in/api/';
  data: any;
  users: string[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  //constructor(public modalCtrl: ModalController) {     
  constructor(public modalCtrl: ModalController, private http: HttpClient, public restApi: RestApiProvider) {               // Inject HttpClient into your component or service.
    console.log(this.cards);
    
    this.getUsers();
  }
  
  getUsers() {
  
  
    this.restApi.getUsers(this.page, this.apiUrl)
       .subscribe(
         res => {
           this.data = res;
           this.users = this.data.data;
           this.perPage = this.data.per_page;
           this.totalData = this.data.total;
           this.totalPage = this.data.total_pages;
           
           console.log(this.data);
         },
         error =>  this.errorMessage = <any>error);
         
    
  }
  
  doInfinite(infiniteScroll) {
  
  
    this.page = this.page+1;
    setTimeout(() => {
      this.restApi.getUsers(this.page, this.apiUrl)
         .subscribe(
           res => {
             this.data = res;
             this.perPage = this.data.per_page;
             this.totalData = this.data.total;
             this.totalPage = this.data.total_pages;
             
             for(let i=0; i<this.data.data.length; i++) {
               this.users.push(this.data.data[i]);
             }
           },
           error =>  this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }
 
  ngOnInit(): void {  
  // Make the HTTP request:
  
    
    this.http
    .get<ItemsResponse>(database_json)
    .retry(3)
    .subscribe(
      data => {
        // Read the result field from the JSON response.
        //this.data_results = data['results'];
        
        
        
        this.cards = data.friendRequest;
        
        console.log(this.cards);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
  // myMessage;
  //   public myOtherMessage$: Observable<MqttMessage>;
    
  //   constructor(private _mqttService: MqttService) {
  //     this._mqttService.observe('mqtt-out').subscribe((message: MqttMessage) => {
  //       this.myMessage = message.payload.toString();
  //     });
  //     this.myOtherMessage$ = this._mqttService.observe('mqtt-out');
  //   }
  
  //   public unsafePublish(topic: string, message: string): void {
  //     this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  //   }
}



