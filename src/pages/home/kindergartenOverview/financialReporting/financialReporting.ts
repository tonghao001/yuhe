import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-financial-reporting'
})
@Component({
  templateUrl: 'financialReporting.html'
})
export class FinancialReportingPage {
  constructor(public navCtrl: NavController) {
  }

  chart: Chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    credits: {
      enabled:false
    },
    legend: {
      enabled: true
    },
    xAxis: {
      categories: [
        '一月', '二月', '三月', '四月'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{y}'
          // formatter: function () {
          //   console.log(this);
          //   return this.y;
          // }

        }
      }
    },
    series: [
      {
        name: '学费',
        data: [10, 20, 30, 40]
      },
      {
        name: '政府拨款',
        data: [30, 40, 50, 60]
      }
    ]
  });

  timeString: 'day';


  goToPage(pageName, id){
    pageName = pageName || 'app-home-sickness-case-list';
    console.log('id:',id);
    this.navCtrl.push(pageName, { id: id });
  }

  selectTime(event){
    console.log(event.value);
    this.timeString = event.value;
  }

}