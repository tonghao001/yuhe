import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public nav: NavController) {
    
  }
  onClick() {
    this.nav.push('app-home-announcement');
  }
}
