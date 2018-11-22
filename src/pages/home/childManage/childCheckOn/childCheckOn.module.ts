import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckOn } from "./childCheckOn";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    ChildCheckOn
  ],
  imports: [
    IonicPageModule.forChild(ChildCheckOn),
    ChartModule
  ],
  entryComponents: [
    ChildCheckOn
  ]
})
export class ChildCheckOnPageModule { };