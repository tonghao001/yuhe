import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckChartDetail } from "./childCheckChartDetail";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    ChildCheckChartDetail
  ],
  imports: [
    IonicPageModule.forChild(ChildCheckChartDetail),
    ChartModule
  ],
  entryComponents: [
    ChildCheckChartDetail
  ]
})
export class ChildCheckChartDetailPageModule { };