import { CheckInPage } from "./checkIn";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [CheckInPage],
  imports: [
      IonicPageModule.forChild(CheckInPage),
    ],
  entryComponents: [CheckInPage]
})
export class CheckInPageModule {}