import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-childCheckChartDetail'
})
@Component({
  templateUrl: 'childCheckChartDetail.html'
})
export class ChildCheckChartDetail {
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
          distance:-60,
          formatter:function(){
            return '<b>'+this.point.name+'</b>:'+this.point.percentage.toFixed(2)+"%";
          },
        },
        events: {
          click: (e)=>{
            console.log(e.point.name);
              this.navCtrl.push('app-home-chartDetailList', {name: e.point.name});
          }
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

  timeString: 'day';


  goToPage(pageName, id){
    pageName = pageName || 'app-home-childCheckList';
    console.log('id:',id);
    this.navCtrl.push(pageName, { id: id });
  }

  selectTime(event){
    console.log(event.value);
    this.timeString = event.value;
  }

}
