import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

import { Directive } from '@angular/core';

@Component({
  selector: 'page-new-post', 
  templateUrl: 'new-post.html'
})

export class NewPostPage {
  character;
  status_post;
  loggedUser;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  
    this.loggedUser = {
      picture: 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-1/p100x100/21077789_1984001225175433_8820336762947807141_n.jpg?oh=d693e4bedfc4a02f3ad1eb3e2c37ec94&oe=5A613FED',
      name: {first: 'Tom'}
    };
  
    this.status_post = {
      audience: 'Tất cả',
      text: '',
      images: [],
      location: 'Hà Nội'
    };
    
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

