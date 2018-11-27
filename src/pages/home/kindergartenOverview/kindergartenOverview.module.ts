import { NgModule } from "@angular/core";
// import { IonicPageModule } from "ionic-angular";
// import { ChildManagePage } from "./childManage";
import { StaffAttendancePageModule } from "./staffAttendance/staffAttendance.module";

@NgModule({
  declarations:[
    // ChildManagePage
  ],
  imports:[
    // IonicPageModule.forChild(ChildManagePage),
    StaffAttendancePageModule
  ],
  entryComponents:[
    // ChildManagePage
  ]
})
export class kindergartenOverviewModule {};