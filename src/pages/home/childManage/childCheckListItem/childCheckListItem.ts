import { IonicPage,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { ChildAttendanceNetwork } from "../../../../network/childAttendance.network";
import { ToastService } from "../../../../service/toast.service";
import { formatDate } from '../../../../network/http';


@IonicPage({
  name: 'app-home-childCheckListItem'
})
@Component({
  templateUrl: 'childCheckListItem.html'
})
export class ChildCheckListItem {

  classId;
  list;
  todayString = formatDate(new Date(), 'yyyy-MM-dd');

  constructor(params: NavParams, private childAttendanceNetwork: ChildAttendanceNetwork, private toastService: ToastService) {
    this.classId = params.data.id;
    console.log('classId:', this.classId);

    this.getStudentAttendanceList();
    // this.list = [
    //   {
    //     name: '朱晓杰',
    //     status: 'inSchool',
    //     statusString: '在校',
    //     leaveCount: 54,
    //     signCount: 54,
    //     noSignedCount: 0
    //   },{
    
    //     name: '胡乐乐',
    //     status: 'inSchool',
    //     statusString: '在校',
    //     leaveCount: 54,
    //     signCount: 54,
    //     noSignedCount: 0
    //   },{
    //     name: '朱珠',
    //     status: 'leave',
    //     statusString: '请假',
    //     leaveCount: 54,
    //     signCount: 54,
    //     noSignedCount: 0
    //   },{
    
    //     name: '张小子',
    //     status: 'inSchool',
    //     statusString: '在校',
    //     leaveCount: 54,
    //     signCount: 54,
    //     noSignedCount: 0
    //   }
    // ];
  }

  getStudentAttendanceList() {
    this.childAttendanceNetwork.getStudentAttendanceListByClass({ classId: this.classId, startDate: this.todayString, endDate: this.todayString })
      .subscribe((students: [{xm: string, signCount: number, absenceCount: number, leaveCount: number, status: string}]) => {
        console.log(students);
        if(students && Array.isArray(students)){
          this.list = students.map((student)=>{
            return {
              name: student.xm,
              signCount: student.signCount,
              absenceCount: student.absenceCount,
              leaveCount: student.leaveCount,
              status: student.status === '缺席' ? 'leave' : '',
              statusString: student.status
            };
          });
        }
      }, err => {
        this.toastService.show(err.message || '获取学生出勤列表失败！');
      });
  }
}
