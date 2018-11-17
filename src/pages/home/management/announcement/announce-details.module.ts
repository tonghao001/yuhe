import { AnnounceDetails } from "./announce-details";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [AnnounceDetails],
  imports: [
      IonicPageModule.forChild(AnnounceDetails),
    ],
  entryComponents: [AnnounceDetails]
})
export class AnnounceDetailsPageModule {}