import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StaffAttendancePage } from "./staffAttendance";

@NgModule({
  declarations:[
    StaffAttendancePage
  ],
  imports:[
    IonicPageModule.forChild(StaffAttendancePage)
  ],
  entryComponents:[
    StaffAttendancePage
  ]
})
export class StaffAttendancePageModule {};