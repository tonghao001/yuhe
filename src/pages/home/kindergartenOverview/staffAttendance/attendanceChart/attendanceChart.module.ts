import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendanceChartPage } from "./attendanceChart";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AttendanceChartPage
  ],
  imports: [
    IonicPageModule.forChild(AttendanceChartPage),
    ChartModule
  ],
  entryComponents: [
    AttendanceChartPage
  ]
})
export class AttendanceChartPageModule { };