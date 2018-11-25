import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-childCheckOnManage'
})
@Component({
  templateUrl: 'childCheckOn.html'
})
export class ChildCheckOn {
  constructor(public navCtrl: NavController) {
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
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %'
        },
        showInLegend: true
      }
    },
    series: [{
      name: 'Brands',
      data: [{
        name: '实到',
        y: 20,
        sliced: true,
        selected: true,
        color: '#df56ff',
        description: '20%'
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


  goToPage(pageName, id){
    pageName = pageName || 'app-home-childCheckList';
    console.log('id:',id);
    this.navCtrl.push(pageName, { id: id });
  }


}
