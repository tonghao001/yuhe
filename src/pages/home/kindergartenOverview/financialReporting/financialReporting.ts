import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { KindergartenOverviewNetwork } from '../../../../network/kindergartenOverview.network';
import { formatDate } from '../../../../network/http';

@IonicPage({
  name: 'app-home-financial-reporting'
})
@Component({
  templateUrl: 'financialReporting.html'
})
export class FinancialReportingPage {
  chart1: Chart;
  chart2: Chart;
  inComeTotal:number;
  outputTotal:number;
  timeString: 'day';

  constructor(
    public navCtrl: NavController,
    public kindergartenOverviewNetwork: KindergartenOverviewNetwork
  ) {
    this.inComeTotal=0;
    this.outputTotal=0;
    this.updateChart1({});
    this.updateChart2({});
  }

  updateChart1 = (params: any) => {
    this.kindergartenOverviewNetwork.getAllFinancialSourceInfo({
      startDate: formatDate('2018-10-04 00:00:00', 'yyyy-MM-dd'),
      endDate: formatDate('2018-12-22 23:00:00', 'yyyy-MM-dd'),
    }).subscribe((data: any) => {
      if (data.status) {
        return;
      }

      let seriesData = []; let total = 0;
      data.forEach(item => {
        seriesData.push({
          name: item.name,
          y: item.chargeSum
        });
        total += item.chargeSum;
      })
      this.inComeTotal=total;

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
      this.chart1 = new Chart(options);
    });
  }
  updateChart2 = (params: any) => {
    this.kindergartenOverviewNetwork.getAllFinancialOutputInfo({
      startDate: formatDate('2018-10-04 00:00:00', 'yyyy-MM-dd'),
      endDate: formatDate('2018-12-22 23:00:00', 'yyyy-MM-dd'),
    }).subscribe((data: any) => {
      if (data.status) {
        return;
      }

      let seriesData = []; let total = 0;
      data.forEach(item => {
        seriesData.push({
          name: item.name,
          y: item.payoutSum
        });
        total += item.payoutSum;
      })
      this.outputTotal=total;
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
      this.chart2 = new Chart(options);
    });
  }

  goToPage(pageName, id) {
    pageName = pageName;
    console.log('id:', id);
    this.navCtrl.push(pageName, { type:id });
  }

  selectTime(event) {
    console.log(event.value);
    this.timeString = event.value;
  }

}