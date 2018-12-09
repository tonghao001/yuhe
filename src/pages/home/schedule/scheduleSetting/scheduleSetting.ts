import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage({
  name: 'app-home-scheduleSetting'
})
@Component({
  templateUrl: 'scheduleSetting.html'
})
export class ScheduleSettingPage {
  list;

  constructor(private navCtrl: NavController) {
    this.list = {
      today: [
        {
          id: 1,
          time: '18:30',
          scheduleTitle: '定制服装'
        },
        {
          id: 2,
          time: '18:30',
          scheduleTitle: '表演集合，体育场集合'
        }
      ],
      tomorrow: [
        {
          id: 1,
          time: '18:30',
          scheduleTitle: '定制服装'
        },
        {
          id: 2,
          time: '18:30',
          scheduleTitle: '表演集合，体育场集合'
        }
      ]
    };
  }

  goToPage(pageName, id) {
    pageName = pageName || 'app-home-scheduleDetail';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }


}
