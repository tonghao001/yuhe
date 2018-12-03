import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ScheduleSettingPage } from "./scheduleSetting";

@NgModule({
  declarations: [
    ScheduleSettingPage
  ],
  imports: [
    IonicPageModule.forChild(ScheduleSettingPage)
  ],
  entryComponents: [
    ScheduleSettingPage
  ]
})
export class ScheduleSettingPageModule { };