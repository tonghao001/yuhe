
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  constructor(public navCtrl: NavController) {

  }

  goToClassManage() {
    this.navCtrl.push('app-home-classManage', { id: 123 });
  }

  goToChildCheckOnManage() {
    this.navCtrl.push('app-home-childCheckOnManage', { id: 123 });
  }
}