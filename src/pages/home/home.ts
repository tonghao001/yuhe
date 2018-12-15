import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MessageService } from '../../service/message.service';
import { ConfirmService } from '../../service/confirm.service';
import { ActionSheetService } from '../../service/actionSheet.service';
import { Platform, NavController } from 'ionic-angular';
import { StorageService, STORAGE_KEY } from '../../service/storage.service';
import { StaffAttendanceNetwork } from '../../network/staffAttendance.network';
import { formatDate } from '../../network/http';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private messageService: MessageService,
    private confirmService: ConfirmService,
    private actionSheetService: ActionSheetService,
    private platform: Platform,
    private storage: StorageService,
    private staffAttendanceNetwork: StaffAttendanceNetwork
  ) {
    
    let user = this.storage.get(STORAGE_KEY.USER_INFO);
    console.log(user);
   }

  searchText: string = '';
  chartName = '';

  chart1: Chart = new Chart({
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
            this.goToPage('app-home-staffAttendance');
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
            y: 25
          },
          {
            name: '实到',
            y: 12
          },
          {
            name: '缺勤',
            y: 6
          },
          {
            name: '其他',
            y: 7
          }
        ]
      }
    ]
  });
  chart2: Chart = new Chart({
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
  chart3: Chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    credits: {
      enabled:false
    },
    legend: {
      enabled: true
    },
    xAxis: {
      categories: [
        '一月', '二月', '三月', '四月'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{y}'
          // formatter: function () {
          //   console.log(this);
          //   return this.y;
          // }

        }
      }
    },
    series: [
      {
        name: '学费',
        data: [10, 20, 30, 40]
      },
      {
        name: '政府拨款',
        data: [30, 40, 50, 60]
      }
    ]
  });

  onSelectChart(chartName) {
    if (chartName === this.chartName) return;
    console.log('onclick',chartName);
    this.chartName = chartName;
  }

  onSearch(e): void {
    console.log(e, this.searchText);
  }
  onClearSearchText(e): void {
    console.log('cancel', e, this.searchText);
  }
  showAlert(): void {
    this.messageService.show({
      subTitle: '新年快乐!!!'
    });
  }
  showConfirm(): void {
    this.confirmService.show({
      subTitle: '确认删除吗？',
      buttons: [
        {
          handler: () => {
            alert('取消了');
          }
        },
        {
          handler: () => {
            alert('已删除');
          }
        }
      ]
    })
  }
  showActionSheet(): void {
    this.actionSheetService.show({
      title: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          // icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          // icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          // icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          // icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
  }

  goToPage(pageName): void {
    pageName = pageName || 'app-home-classManage';
    this.navCtrl.push(pageName);
    return;
  }


  ionViewWillEnter(){
    this.onSelectChart('chart1');

    this.staffAttendanceNetwork.getStaffAttendanceList({
      startDate:formatDate('2018-1-1 00:00:00', 'yyyy-MM-dd HH:mm:ss'),
      endDate:formatDate('2018-12-15 00:00:00', 'yyyy-MM-dd HH:mm:ss'),
    }).subscribe(data=>{
      console.log(data);
    })
  }

}
