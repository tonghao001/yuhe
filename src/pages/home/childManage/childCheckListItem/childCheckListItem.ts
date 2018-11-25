import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-childCheckListItem'
})
@Component({
  templateUrl: 'childCheckListItem.html'
})
export class ChildCheckListItem {

  list;

  constructor() {
    this.list = [
      {
        name: '朱晓杰',
        status: 'inSchool',
        statusString: '在校',
        leaveCount: 54,
        signCount: 54,
        noSignedCount: 0
      },{
    
        name: '胡乐乐',
        status: 'inSchool',
        statusString: '在校',
        leaveCount: 54,
        signCount: 54,
        noSignedCount: 0
      },{
        name: '朱珠',
        status: 'leave',
        statusString: '请假',
        leaveCount: 54,
        signCount: 54,
        noSignedCount: 0
      },{
    
        name: '张小子',
        status: 'inSchool',
        statusString: '在校',
        leaveCount: 54,
        signCount: 54,
        noSignedCount: 0
      }
    ];
  }

}
