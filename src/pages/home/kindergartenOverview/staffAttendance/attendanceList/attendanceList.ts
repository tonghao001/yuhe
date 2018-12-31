import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-attendance-list'
})
@Component({
  templateUrl: 'attendanceList.html'
})
export class AttendanceListPage {

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
      }
    ];
  }

}
