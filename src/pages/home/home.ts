import { Component } from '@angular/core';
import {  ModalController } from 'ionic-angular';

import { NewPostPage } from './new-post/new-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) { }
  
  newStatusPost(characterNum) {
    let modal = this.modalCtrl.create(NewPostPage, characterNum);
    //let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present(); 
  }

}


