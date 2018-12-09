import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NewSchedulePage } from "./newSchedule";

@NgModule({
  declarations: [
    NewSchedulePage
  ],
  imports: [
    IonicPageModule.forChild(NewSchedulePage)
  ],
  entryComponents: [
    NewSchedulePage
  ]
})
export class NewSchedulePageModule { };