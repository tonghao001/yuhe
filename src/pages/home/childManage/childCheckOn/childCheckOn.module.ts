import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckOn } from "./childCheckOn";
import { ChartModule } from 'angular-highcharts';
import { ChildAttendanceNetwork } from "../../../../network/childAttendance.network";
import { ToastService } from "../../../../service/toast.service";

@NgModule({
  declarations: [
    ChildCheckOn
  ],
  imports: [
    IonicPageModule.forChild(ChildCheckOn),
    ChartModule
  ],
  providers: [ChildAttendanceNetwork, ToastService],
  entryComponents: [
    ChildCheckOn
  ]
})
export class ChildCheckOnPageModule { };