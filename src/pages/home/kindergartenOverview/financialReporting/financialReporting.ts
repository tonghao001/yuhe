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
  startDate1: Date;
  startDate2: Date;
  chart1: Chart;
  chart2: Chart;
  inComeTotal: number;
  outputTotal: number;

  constructor(
    public navCtrl: NavController,
    public kindergartenOverviewNetwork: KindergartenOverviewNetwork
  ) {
    this.startDate1 = new Date(formatDate(new Date(), 'yyyy/MM/dd'));
    this.startDate1.setDate(1);

    this.startDate2 = new Date(formatDate(new Date(), 'yyyy/MM/dd'));
    this.startDate2.setDate(1);

    this.inComeTotal = 0;
    this.outputTotal = 0;
    this.updateChart1();
    this.updateChart2();
  }
  getEndDate(startDate:Date) {
    return new Date(new Date(startDate).setMonth(startDate.getMonth() + 1) - 1000);
  }

  changeMonth(timeProp: string, num: number, updateProp:string) {
    this[timeProp] = new Date(this[timeProp].setMonth(this[timeProp].getMonth() + num));
    // this[updateProp]();
    this.updateChart1();
    this.updateChart2();
  }

  updateChart1 = () => {
    this.kindergartenOverviewNetwork.getAllFinancialSourceInfo({
      startDate: formatDate(this.startDate1, 'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(this.startDate1), 'yyyy-MM-dd'),
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
      this.inComeTotal = total;

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
  updateChart2 = () => {
    this.kindergartenOverviewNetwork.getAllFinancialOutputInfo({
      startDate: formatDate(this.startDate1, 'yyyy-MM-dd'),
      endDate: formatDate(this.getEndDate(this.startDate1), 'yyyy-MM-dd'),
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
      this.outputTotal = total;
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
    this.navCtrl.push(pageName, { type: id });
  }

}