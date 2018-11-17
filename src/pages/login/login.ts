import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {

  }

  onLogin() {
    this.navCtrl.push('app-tab',{id:123});
  }
}
