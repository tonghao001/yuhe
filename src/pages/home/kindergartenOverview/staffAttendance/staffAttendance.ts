import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { formatDate } from '../../../../network/http';
import { KindergartenOverviewNetwork } from '../../../../network/kindergartenOverview.network';
import { isArray, isEmpty } from 'lodash';

@IonicPage({
  name: 'app-home-staffAttendance'
})
@Component({
  templateUrl: 'staffAttendance.html'
})
export class StaffAttendancePage {
  startDate: Date;
  chart1: Chart;
  attendanceList: any[];

  constructor(
    private navCtrl: NavController,
    private kindergartenOverviewNetwork: KindergartenOverviewNetwork
  ) {
    this.startDate = new Date(formatDate(new Date(), 'yyyy/MM/dd'));
    this.startDate.setDate(1);
  }

  ionViewDidEnter() {
    this.updateChart1();
    this.getStaffAttendanceList();
  }


  getEndDate() {
    return new Date(new Date(this.startDate).setMonth(this.startDate.getMonth() + 1) - 1000);
  }

  updateChart1 = () => {
    this.kindergartenOverviewNetwork.getAllAttendanceInfo({
      startDate: formatDate(this.startDate, 'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(), 'yyyy-MM-dd'),
    }).subscribe((data: any) => {
      if (data.status) {
        return;
      }
      let options = {
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
        loading: {
          showDuration: 100,
          hideDuration: 100
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{percentage:.1f}%',
              distance: -20
            },
            showInLegend: true,
            events: {
              click: (e) => {
                this.goToPage('app-home-staffAttendance', null);
              }
            },
            tooltip: {
            }
          }
        },
        series: [
          {
            name: '出勤',
            data: [
              {
                name: '应到',
                y: data.totalCount
              },
              {
                name: '实到',
                y: data.signCount
              },
              {
                name: '缺勤',
                y: data.leaveCount
              },
              {
                name: '其他',
                y: data.absenceCount
              }
            ]
          }
        ]
      };
      this.chart1 = new Chart(options);
    });
  }

  getStaffAttendanceList() {
    this.kindergartenOverviewNetwork.getStaffAttendanceList({
      startDate: formatDate(this.startDate, 'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(), 'yyyy-MM-dd')
    }).subscribe((data: any) => {
      if (isArray(data)) {
        this.attendanceList = data.map((item) => {
          return {
            name: item.teacherName,
            rate: (item.signRate || 0) * 100
          }
        })
      }
    })
  }


  goToPage(pageName, id) {
    pageName = pageName || 'app-home-attendance-list';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }

}
