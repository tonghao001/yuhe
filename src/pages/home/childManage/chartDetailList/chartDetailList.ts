import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-chartDetailList'
})
@Component({
  templateUrl: 'chartDetailList.html'
})
export class ChartDetailList {
  constructor(public navCtrl: NavController) {
    this.list = [
      {
        className: '小二班',
        studentCount: 12,
        students: [{ name: '小明', id: '1' }, { name: '小梅', id: 2 }, { name: '小强', id: 3 }]
      },
      {
        className: '大一班',
        studentCount: 4,
        students: [{ name: '小海', id: 4 }, { name: '小红', id: 5 }]
      }
    ];
  }

  list;


}
