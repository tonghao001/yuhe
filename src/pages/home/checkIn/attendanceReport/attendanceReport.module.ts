import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendanceReportPage } from "./attendanceReport";

import { CalendarComponent } from '../../../../components/calendar/calendar';

@NgModule({
  declarations: [
    AttendanceReportPage,
    CalendarComponent
  
  ],
  imports: [
    IonicPageModule.forChild(AttendanceReportPage)
  ],
  entryComponents: [
    AttendanceReportPage
  ],
  providers:[
    CalendarComponent
  ],
})
export class AttendanceReportPageModule { };