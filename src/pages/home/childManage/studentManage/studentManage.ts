import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ClassNetwork } from "../../../../network/class.network";
import { ToastService } from "../../../../service/toast.service";

@IonicPage({
  name: 'app-home-studentManage'
})
@Component({
  templateUrl: 'studentManage.html'
})

export class StudentManagePage {
  classId;
  list;
  constructor(private navCtrl: NavController, params: NavParams, private classNetwork: ClassNetwork, private toastService: ToastService) {
    // params.data = params.data || {};
    console.log(params.data);
    this.classId = params.data.id;
    // this.list = [
    //   {name: '章三', image:'',statusString: '在校', statusDescription:'正常', score: 95, status:'in-school'},
    //   {name: '里斯', image:'',statusString: '请假', statusDescription:'正常', score: 95, status:'leave'},
    //   {name: '王麻子', image:'',statusString: '旷课', statusDescription:'不正常', score: 95, status: 'absent'}
    // ];
    this.getClassStudentList();
  }

  getClassStudentList(onSuccess?: any) {
    this.classNetwork.getClassStudents({classId: this.classId})
      .subscribe((studentList: [{ id: number, xm: string, zp: string, }]) => {
        console.log(studentList);
        this.list = studentList.map((student) => {
          return {
            id: student.id,
            name: student.xm,
            image: 'http://www.yuhe.insighthink.com/yh_YEManager/images/' + student.zp,
            statusDescription: '正常',
            status:'leave',
            statusString: '请假',
            score: 95
          };
        });
        console.log(studentList);
        if (onSuccess) {
          onSuccess();
        }
      }, err => {
        this.toastService.show(err.message || '获取班级列表失败！');
      });
  }

  doRefresh(event){
    this.getClassStudentList(()=>{
      event.complete();
    });
  }

  goToStudentDetail(id){
    console.log('id:',id);
    this.navCtrl.push('app-home-studentDetail', { id: id });
  }

}
