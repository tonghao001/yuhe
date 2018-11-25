import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { MessageService } from '../../service/message.service';
import { ConfirmService } from '../../service/confirm.service';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    private messageService: MessageService,
    private confirmService: ConfirmService
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
  showAlert() {
    this.messageService.show({
      subTitle: '新年快乐!!!'
    });
  }
  showConfirm(): void {
    this.confirmService.show({
      subTitle:'确认删除吗？',
      buttons:[
        {
          handler:()=>{
            alert('取消了');
          }
        },
        {
          handler:()=>{
            alert('已删除');
          }
        }
      ]
    })
  }

}
