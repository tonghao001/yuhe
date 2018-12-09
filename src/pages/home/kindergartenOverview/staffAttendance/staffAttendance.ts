import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-staffAttendance'
})
@Component({
  templateUrl: 'staffAttendance.html'
})
export class StaffAttendancePage {
  constructor(private navCtrl: NavController) {
  }

  chart: Chart = new Chart({
    chart: {
      type: 'pie'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    legend: {
      labelFormat: '{name}<br/>{y}人'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          distance: -40
        },
        showInLegend: true,
        events: {
          click: () => {
            this.goToPage('app-home-attendance-chart',null);
          }
        }
      }
    },
    series: [{
      name: 'Brands',
      data: [{
        name: '实到',
        y: 20,
        color: '#df56ff',
      }, {
        name: '应到',
        y: 25,
        color: '#08f8f5'
      }, {
        name: '请假',
        y: 12,
        color: '#71b9fd'
      }, {
        name: '未签到',
        y: 43,
        color: '#7d81ff'
      }]
    }]
  });


  goToPage(pageName, id) {
    pageName = pageName || 'app-home-attendance-list';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }


}
