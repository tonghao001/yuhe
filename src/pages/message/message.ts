
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  private currentSelectDate;
  private defaultSelectToday;
  constructor(public navCtrl: NavController) {
    this.currentSelectDate = null;
    this.defaultSelectToday =true;
  }

  
  selectDateChange(newDate){
    this.currentSelectDate = newDate;
    console.log('change');
  }

  goToClassManage() {
    this.navCtrl.push('app-home-classManage', { id: 123 });
  }

  goToChildCheckOnManage() {
    this.navCtrl.push('app-home-childCheckOnManage', { id: 123 });
  }
}