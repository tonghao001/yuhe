import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-classManage'
})
@Component({
  templateUrl: 'classManage.html'
})

export class ClassManagePage {
  list;
  constructor() {
  
    this.list = [
      {name: '大一班', image:'',totalCount: 30, female: 15, male: 15},
      {name: '大二班', image:'',totalCount: 30, female: 15, male: 15},
      {name: '大三班', image:'',totalCount: 30, female: 15, male: 15},
      {name: '大四班', image:'',totalCount: 30, female: 15, male: 15},
      {name: '大五班', image:'',totalCount: 30, female: 15, male: 15},

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
