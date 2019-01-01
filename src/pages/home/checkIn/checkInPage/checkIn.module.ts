import { CheckInPage } from "./checkIn";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { CheckNetwork } from "../../../../network/check.network";

@NgModule({
  declarations: [CheckInPage],
  imports: [
      IonicPageModule.forChild(CheckInPage),
    ],
  entryComponents: [CheckInPage],
  providers: [CheckNetwork],
})
export class CheckInPageModule {}