import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-studentManage'
})
@Component({
  templateUrl: 'studentManage.html'
})

export class StudentManagePage {
  list;
  constructor() {
  
    this.list = [
      {name: '章三', image:'',totalCount: 30, female: 15, male: 15},
      {name: '里斯', image:'',totalCount: 30, female: 15, male: 15},
      {name: '王麻子', image:'',totalCount: 30, female: 15, male: 15}
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


}
