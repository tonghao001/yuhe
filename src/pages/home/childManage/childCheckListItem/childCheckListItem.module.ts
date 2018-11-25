import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckListItem } from "./childCheckListItem";
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    ChildCheckListItem
  ],
  imports: [
    IonicPageModule.forChild(ChildCheckListItem),
    ChartModule
  ],
  entryComponents: [
    ChildCheckListItem
  ]
})
export class ChildCheckListItemPageModule { };