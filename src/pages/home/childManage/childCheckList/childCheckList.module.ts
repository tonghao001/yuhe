import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckList } from "./childCheckList";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    ChildCheckList
  ],
  imports: [
    IonicPageModule.forChild(ChildCheckList),
    ChartModule
  ],
  entryComponents: [
    ChildCheckList
  ]
})
export class ChildCheckListPageModule { };