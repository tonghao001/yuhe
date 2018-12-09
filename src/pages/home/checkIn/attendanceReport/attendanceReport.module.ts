import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { AttendanceReportPage } from "./attendanceReport";

import { MessagePageModule } from "../../../message/message.module";
import { ComponentsModule } from "../../../../components/components.module";

@NgModule({
  declarations: [
    AttendanceReportPage
  
  ],
  imports: [
    IonicPageModule.forChild(AttendanceReportPage),
    MessagePageModule,
    ComponentsModule
  ],
  entryComponents: [
    AttendanceReportPage
  ],
  providers:[
    
  ],
})
export class AttendanceReportPageModule { };