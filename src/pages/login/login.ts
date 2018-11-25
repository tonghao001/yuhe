import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController) {
    
  }
  isRememberPassword:Boolean = false;

  onRememberPassword(): void {
    console.log(this.isRememberPassword);
  }

  onLogin(): void {
    this.navCtrl.push('app-tab',{id:123});
  }
  onForgetPassword() {
    this.navCtrl.push('app-forget-password');
  }

}
