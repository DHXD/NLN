import { Component } from '@angular/core';
import {  ModalController } from 'ionic-angular';

import { NewPostPage } from './new-post/new-post';

var database_json = '/database.json';

//var database_json = 'http://nguoilamnong.vn/mxh/json';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  cards;
  data_results: string[];

  //constructor(public modalCtrl: ModalController) {     
  constructor(private http: HttpClient) {               // Inject HttpClient into your component or service.
  }
  
  newStatusPost(characterNum) {
    let modal = this.modalCtrl.create(NewPostPage, characterNum);
    //let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present(); 
  }
  
  ngOnInit(): void {
    // Make the HTTP request:
    this.http
    .get<ItemsResponse>('database_json')
    .retry(3)
    .subscribe(
      data => {
        // Read the result field from the JSON response.
        this.data_results = data['results'];
        this.cards = this.data_results.posts;
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

}


