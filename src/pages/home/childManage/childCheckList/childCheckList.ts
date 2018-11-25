import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-childCheckList'
})
@Component({
  templateUrl: 'childCheckList.html'
})
export class ChildCheckList {

  list;

  constructor(public navCtrl: NavController) {
    this.list = [
      {
        name: '大一班',
        arriveCount: 54,
        actualCount: 54,
        leaveCount: 13,
        noSignedCount: 0
      },{
    
        name: '大二班',
        arriveCount: 54,
        actualCount: 54,
        leaveCount: 13,
        noSignedCount: 0
      },{
        name: '大三班',
        arriveCount: 54,
        actualCount: 54,
        leaveCount: 13,
        noSignedCount: 0
      }
    ];
  }


  goToPage(pageName, id){
    pageName = pageName || 'app-home-childCheckListItem';
    console.log('id:',id);
    this.navCtrl.push(pageName, { id: id });
  }

}
