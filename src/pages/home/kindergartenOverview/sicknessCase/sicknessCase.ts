import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@IonicPage({
  name: 'app-home-sickness-case'
})
@Component({
  templateUrl: 'sicknessCase.html'
})
export class SicknessCasePage {
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
      enabled: false
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      min: 0,
      title: {
        text: '总数：165'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
    series: [{
      name: '浏览器',
      data: [
        {
          name: '情况1',
          y: 55,
          color: 'green'
        },
        {
          name: '情况2',
          y: 25,
          color: 'blue'
        },
        {
          name: '情况3',
          y: 85,
          color: 'yellow'
        }
      ]
    }]
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