import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassNetwork } from "../../../../network/class.network";
import { ToastService } from "../../../../service/toast.service";

@IonicPage({
  name: 'app-home-classManage'
})
@Component({
  templateUrl: 'classManage.html'
})

export class ClassManagePage {
  list;
  constructor(private navCtrl: NavController, private classNetwork: ClassNetwork, private toastService: ToastService) {
    this.getClassList();
  }

  getClassList(onSuccess?: any) {
    this.classNetwork.getClassList()
      .subscribe((classList: [{ bid: string, bjmc: string, girl: string, man: string }]) => {
        this.list = classList.map((classInfo) => {
          return {
            id: classInfo.bid,
            name: classInfo.bjmc,
            girl: classInfo.girl,
            boy: classInfo.man,
            totalCount: parseInt(classInfo.girl) + parseInt(classInfo.man) || 0
          };
        });
        console.log(classList);
        if (onSuccess) {
          onSuccess();
        }
      }, err => {
        this.toastService.show(err.message || '获取班级列表失败！');
      });
  }

  doRefresh(event) {
    this.getClassList(() => {
      event.complete();
    });
  }

  goToStudentList(id) {
    console.log('id:', id);
    this.navCtrl.push('app-home-studentManage', { id: id });
  }

}
