import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SicknessCasePage } from "./sicknessCase";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    SicknessCasePage
  ],
  imports: [
    IonicPageModule.forChild(SicknessCasePage),
    ChartModule,
  ],
  entryComponents: [
    SicknessCasePage
  ]
})
export class SicknessCasePageModule { };