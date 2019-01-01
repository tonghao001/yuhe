import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { KindergartenOverviewNetwork } from '../../../../network/kindergartenOverview.network';
import { formatDate } from '../../../../network/http';

@IonicPage({
  name: 'app-home-sickness-case'
})
@Component({
  templateUrl: 'sicknessCase.html'
})
export class SicknessCasePage {
  timeString: 'day';
  chart: Chart;
  startDate: Date;
  categoryList: any[];

  constructor(
    public navCtrl: NavController,
    private kindergartenOverviewNetwork: KindergartenOverviewNetwork
  ) {
    this.startDate = new Date(formatDate('2018/10/1', 'yyyy/MM/dd'));
    this.startDate.setDate(1);
    this.categoryList = [];
  }

  ionViewDidEnter() {
    this.refreshData();
  }

  refreshData() {
    let params = {
      startDate: formatDate(this.startDate, 'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(), 'yyyy-MM-dd')
    };
    this.updateChart(params);
  }

  getEndDate() {
    return new Date(new Date(this.startDate).setMonth(this.startDate.getMonth() + 1) - 1000);
  }

  goPrevMonth() {
    this.startDate = new Date(this.startDate.setMonth(this.startDate.getMonth() - 1));
    this.refreshData();
  }
  goNextMonth() {
    this.startDate = new Date(this.startDate.setMonth(this.startDate.getMonth() + 1));
    this.refreshData();
  }

  updateChart = (params: any) => {
    this.kindergartenOverviewNetwork.getAllSicknessCaseInfo(params)
      .subscribe((data: any) => {
        if (data.status) {
          return;
        }
        let count = data.reduce((a, b) => {
          return a + b.bzs;
        }, 0);
        if (count > 0) {
          data.forEach(a => { a.rate = (a.bzs / count) * 100 });
        }
        this.categoryList = data;

        let seriesData = []; let total = 0;
        data.forEach(item => {
          seriesData.push({
            name: item.bzm,
            y: item.bzs
          });
          total += item.bzs;
        })

        let options = {
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
              text: `总数：${total}`
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
            name: '',
            data: seriesData
          }]
        }

        this.chart = new Chart(options);
      });
  }


  goToPage(pageName, id) {
    pageName = pageName || 'app-home-sickness-case-list';
    console.log('id:', id);
    this.navCtrl.push(pageName, {
      sickName:id,
      startDate: formatDate(this.startDate,'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(),'yyyy-MM-dd')
    });
  }

  selectTime(event) {
    console.log(event.value);
    this.timeString = event.value;
  }

}