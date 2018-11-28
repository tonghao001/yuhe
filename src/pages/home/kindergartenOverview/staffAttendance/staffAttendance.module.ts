import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StaffAttendancePage } from "./staffAttendance";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    StaffAttendancePage
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendancePage),
    ChartModule
  ],
  entryComponents: [
    StaffAttendancePage
  ]
})
export class StaffAttendancePageModule { };