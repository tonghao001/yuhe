import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendanceReportPage } from "./attendanceReport";

@NgModule({
  declarations: [
    AttendanceReportPage,
  ],
  
  imports: [
    IonicPageModule.forChild(AttendanceReportPage)
  ],
  providers: [
    
  ],
  entryComponents: [
    AttendanceReportPage
  ]
})
export class AttendanceReportPageModule { };