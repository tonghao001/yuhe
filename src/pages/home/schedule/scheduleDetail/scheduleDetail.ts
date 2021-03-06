import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ScheduleNetwork } from '../../../../network/schedule.network';
import { ToastService } from '../../../../service/toast.service';

@IonicPage({
  name: 'app-home-scheduleDetail'
})
@Component({
  templateUrl: 'scheduleDetail.html'
})
export class ScheduleDetailPage {
  schedule = {};
  scheduleId;
  constructor(params: NavParams, private navCtrl: NavController, private scheduleNetwork: ScheduleNetwork, private toastService: ToastService) {
    this.scheduleId = params.data.id;

    if(this.scheduleId){
      this.loadSchedule();
    }
  }

  goToPage(pageName, id) {
    pageName = pageName || 'app-home-childCheckList';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }


  loadSchedule(){
    this.scheduleNetwork.getScheduleDetail({
      id: this.scheduleId
    })
      .subscribe((result:any) => {
        if(result){
          this.schedule = {
            title: result.title,
            content: result.content,
            startDateString: result.scheduleDate,
            startTimeString: result.beginTime,
            remark: result.summary
          }
        }
      }, err => {
        this.toastService.show('获取安排信息失败！');
      });

  }
}
