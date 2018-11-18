import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  constructor(public nav: NavController) {
      
  }
  announcementClick() {
    this.nav.push('app-home-announcement');
  }
  princeipalEmailClick() {
    this.nav.push('app-home-principal-email');
  }
}