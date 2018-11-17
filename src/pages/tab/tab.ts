import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { DynamicPage } from '../dynamic/dynamic';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { MePage } from '../me/me';


@IonicPage({
  name: 'app-tab',
  segment: 'tab/:id'
})
@Component({
  templateUrl: 'tab.html'
})
export class TabPage {
  tab1=MessagePage;
  tab2=DynamicPage;
  tab3=HomePage;
  tab4=ContactPage;
  tab5=MePage;
}
