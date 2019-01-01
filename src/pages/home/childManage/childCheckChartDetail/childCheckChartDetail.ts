import { IonicPage,NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { formatDate } from "../../../../network/http";
import { ToastService } from "../../../../service/toast.service";
import { ChildAttendanceNetwork } from "../../../../network/childAttendance.network";

@IonicPage({
  name: 'app-home-childCheckChartDetail'
})
@Component({
  templateUrl: 'childCheckChartDetail.html'
})
export class ChildCheckChartDetail {
  currentTag: string;
  startDate: Date;
  endDate: Date;

  constructor(private navCtrl: NavController, private toastService: ToastService, private childAttendanceNetwork: ChildAttendanceNetwork) {
    this.startDate = new Date(formatDate(new Date(), 'yyyy-MM-dd'));
    this.endDate = new Date();
    this.changeTag('day');
    this.loadAttendanceStatisticOnChart(this.startDate, this.endDate)
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

  sure(){
    console.log('search start:',this.startDate);
    console.log('search end:',this.endDate);
  }

  loadAttendanceStatisticOnChart(startDate, endDate){
    this.childAttendanceNetwork.getAttendanceRateChart({startDate: formatDate(startDate, 'yyyy-MM-dd'), endDate: formatDate(endDate, 'yyyy-MM-dd') })
    .subscribe((result: {absenceCount: number, absenceRate: number, leaveCount: number, leaveRate: number,signCount: number, signRate: number, totalCount: number})=>{
      console.log(result);
      if(result){
        this.chart.removeSerie(0);
        this.chart.addSerie({
            name: 'Brands',
            data: [{
              name: '实到',
              y: result.signCount,
              sliced: true,
              selected: true,
              color: '#df56ff',
            }, {
              name: '应到',
              y: result.totalCount,
              color: '#08f8f5'
            }, {
              name: '请假',
              y: result.leaveCount,
              color: '#71b9fd'
            }, {
              name: '未签到',
              y: result.absenceCount,
              color: '#7d81ff'
            }]
        },true);
      }
    }, err=>{
      this.toastService.show('加载图标数据失败！');
    });
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
    console.log('preve Year');
    let end = (new Date(`${date.getFullYear() + 1}`).getTime() - 1);
    console.log('end:',formatDate(end, 'yyyy-MM-dd HH:mm:ss'));
    this.loadAttendanceStatisticOnChart(date, end);

    console.log('prev year:', date);
  }

}
