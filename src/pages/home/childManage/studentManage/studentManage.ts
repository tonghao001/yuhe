import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@IonicPage({
  name: 'app-home-studentManage'
})
@Component({
  templateUrl: 'studentManage.html'
})

export class StudentManagePage {
  list;
  constructor(public navCtrl: NavController) {
  
    this.list = [
      {name: '章三', image:'',statusString: '在校', statusDescription:'正常', score: 95, status:'in-school'},
      {name: '里斯', image:'',statusString: '请假', statusDescription:'正常', score: 95, status:'leave'},
      {name: '王麻子', image:'',statusString: '旷课', statusDescription:'不正常', score: 95, status: 'absent'}
    ];
  }

  doRefresh(event){
    console.log('refresh');
    console.log('refresh');
    console.log('refresh');

    console.log('refresh');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  
  }

  loadMore(event){
  
  }

  goToStudentDetail(id){
    console.log('id:',id);
    this.navCtrl.push('app-home-studentDetail', { id: id });
  }

}
