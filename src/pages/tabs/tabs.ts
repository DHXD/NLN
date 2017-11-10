import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { NotifyPage } from '../notify/notify';
import { ContactPage } from '../contact/contact'; 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotifyPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
