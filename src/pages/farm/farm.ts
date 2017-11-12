import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ionicBootstrap } from 'ionic-angular';

import { FarmIoT }    from './farm-iot';
import { FarmStock }  from './farm-stock'; 
import { FarmGAP }    from './farm-gap'; 

@Component({
  selector: 'page-farm',
  templateUrl: 'farm.html'
})

export class FarmPage {

  farmTab1Root : any;
  farmTab2Root : any;
  farmTab3Root : any; 

  constructor(public navCtrl: NavController) {
    this.farmTab1Root = FarmIoT;
    this.farmTab2Root = FarmStock;
    this.farmTab3Root = FarmGAP; 
  }

}
