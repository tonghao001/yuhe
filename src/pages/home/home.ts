import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MessageService } from '../../service/message.service';
import { ConfirmService } from '../../service/confirm.service';
import { ActionSheetService } from '../../service/actionSheet.service';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    private messageService: MessageService,
    private confirmService: ConfirmService,
    private actionSheetService: ActionSheetService,
    private platform: Platform
  ) {

  }

  chart: Chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      },
      {
        name: 'Line 2',
        data: [4, 5, 6]
      }
    ]
  });

  searchText: string = '';

  onSearch(e): void {
    console.log(e, this.searchText);
  }
  onClearSearchText(e): void {
    console.log('cancel', e, this.searchText);
  }
  showAlert():void {
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
          // icon: !this.platform.is('ios') ? 'trash' : null,
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

}
