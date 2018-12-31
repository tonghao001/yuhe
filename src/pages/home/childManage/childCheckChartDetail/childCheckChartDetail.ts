import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { formatDate } from "../../../../network/http";

@IonicPage({
  name: 'app-home-childCheckChartDetail'
})
@Component({
  templateUrl: 'childCheckChartDetail.html'
})
export class ChildCheckChartDetail {
  currentTag: string;

  constructor(private navCtrl: NavController) {
    this.changeTag('day');
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

  changeTag(tag){
    console.log('tag:', tag);
    if(tag === this.currentTag){
      return;
    }
    this.currentTag = tag;
  }
  selectTime(event){
    console.log(event.value);
    this.timeString = event.value;
  }


  nextMonth(date){
    console.log('next date:', date);
  }
  prevMonth(date){
    console.log('prev date:', date);
  }
  nextSeason(date){
    console.log('next Season:', date);
  }
  prevSeason(date){
    console.log('prev Season:', date);
  }
  nextYear(date){
    console.log('next year:', date);
  }
  prevYear(date){
    console.log('prev year:', date);
  }

}
