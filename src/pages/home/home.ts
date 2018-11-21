import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
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
    console.log('cancel',e, this.searchText);
  }

}
