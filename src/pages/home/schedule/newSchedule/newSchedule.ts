import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ConfirmService } from '../../../../service/confirm.service';

@IonicPage({
  name: 'app-home-newSchedule'
})
@Component({
  templateUrl: 'newSchedule.html'
})
export class NewSchedulePage {
  constructor(private navCtrl: NavController,
    private confirmService: ConfirmService) {
  }

  save(): void {
    this.confirmService.show({
      title: '新建日程',
      subTitle: '确认要保存新日程吗？',
      buttons: [
        {
          handler: () => {
          }
        },
        {
          handler: () => {
            this.navCtrl.push('app-home-scheduleSetting');
          }
        }
      ]
    })
  }
}
