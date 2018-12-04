import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage({
  name: 'app-home-attendanceReport'
})
@Component({
  templateUrl: 'attendanceReport.html'
})
export class AttendanceReportPage {
  constructor(private navCtrl: NavController) {
    this.currentReport = 'day';
  }

  currentReport;

  goToRankPage():void{
    this.navCtrl.push('app-home-attendance-rank');
  }
  changeCurrentReport(reportType){
    this.currentReport = reportType;
  }
}
