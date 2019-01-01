import { IonicPage,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { ChildAttendanceNetwork } from "../../../../network/childAttendance.network";
import { ToastService } from "../../../../service/toast.service";
import { formatDate } from '../../../../network/http';

@IonicPage({
  name: 'app-home-chartDetailList'
})
@Component({
  templateUrl: 'chartDetailList.html'
})
export class ChartDetailList {


  title: string;
  statusId: number;

  statusDic = {
    '实到': 1,
    '请假': 2,
    '未签到': 3,
    '应到': 4,
  };
  constructor(params: NavParams, private childAttendanceNetwork: ChildAttendanceNetwork, private toastService: ToastService) {
    this.title = params.data.name;
    console.log(params);
    console.log('title:', this.title);
    console.log(this.statusDic);
    this.statusId = this.statusDic[this.title];
    if(!this.statusId){
      this.list = [];
      return;
    }

    this.loadData();

    // this.list = [
    //   {
    //     className: '小二班',
    //     studentCount: 12,
    //     students: [{ name: '小明', id: '1' }, { name: '小梅', id: 2 }, { name: '小强', id: 3 }]
    //   },
    //   {
    //     className: '大一班',
    //     studentCount: 4,
    //     students: [{ name: '小海', id: 4 }, { name: '小红', id: 5 }]
    //   }
    // ];
  }

  list;
  
  loadData(){
    this.childAttendanceNetwork.getStudentsOfClassGroupByStatus({type: this.statusId, checkDate: '2018-12-14'})
    .subscribe((classList)=>{
      if(Array.isArray(classList) && classList.length > 0){
        this.list = classList.map(item=>{
          return {
            className: item.className,
            studentCount: item.attendanceRecords.length,
            students: item.attendanceRecords.map(record=>{return {name: record.xm};})
          }
        });
      }


    }, err=>{
      this.toastService.show('获取数据失败！');
    });
  }


}
