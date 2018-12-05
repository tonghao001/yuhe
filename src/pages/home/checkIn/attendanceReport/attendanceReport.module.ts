import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendanceReportPage } from "./attendanceReport";

import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [
    AttendanceReportPage,
  ],
  
  imports: [
    IonicPageModule.forChild(AttendanceReportPage),
    CalendarModule
  ],
  providers: [
    
  ],
  entryComponents: [
    AttendanceReportPage
  ]
})
export class AttendanceReportPageModule { };