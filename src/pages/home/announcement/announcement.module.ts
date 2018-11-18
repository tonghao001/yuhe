import { Announcement } from "./announcement";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [Announcement],
  imports: [
      IonicPageModule.forChild(Announcement),
    ],
  entryComponents: [Announcement]
})
export class AnnouncementPageModule {}
