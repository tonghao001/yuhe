import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage({
  name: 'app-home-scheduleDetail'
})
@Component({
  templateUrl: 'scheduleDetail.html'
})
export class ScheduleDetailPage {
  constructor(private navCtrl: NavController) {
  }

  goToPage(pageName, id) {
    pageName = pageName || 'app-home-childCheckList';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }


}
