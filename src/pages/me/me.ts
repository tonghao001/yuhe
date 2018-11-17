import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  constructor(public nav: NavController) {
      
  }
  onClick() {
    this.nav.push('app-home-announcement');
  }
}