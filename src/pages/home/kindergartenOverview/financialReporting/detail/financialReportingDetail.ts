import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { KindergartenOverviewNetwork } from '../../../../../network/kindergartenOverview.network';
import { formatDate } from '../../../../../network/http';

@IonicPage({
  name: 'app-home-financial-reporting-detail'
})
@Component({
  templateUrl: 'financialReportingDetail.html'
})
export class FinancialReportingDetailPage {
  title: string;
  chart1: Chart;
  timeString: 'day';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public kindergartenOverviewNetwork: KindergartenOverviewNetwork
  ) {
    this.title = this.navParams.data.type == 1 ? '全园收入' : '全园支出';
    this.updateChart1({});
  }

  updateChart1 = (params: any) => {
    let func = this.navParams.data.type == 1 ?
      this.kindergartenOverviewNetwork.getAllFinancialSourceInfo :
      this.kindergartenOverviewNetwork.getAllFinancialOutputInfo;

    func = func.bind(this.kindergartenOverviewNetwork);

    func({
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
          y: item.chargeSum||item.payoutSum
        });
        total += item.chargeSum||item.payoutSum;
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
      this.chart1 = new Chart(options);
    });
  }


}