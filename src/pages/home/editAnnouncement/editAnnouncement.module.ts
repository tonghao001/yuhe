import { EditAnnouncement } from "./editAnnouncement";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [EditAnnouncement],
  imports: [
      IonicPageModule.forChild(EditAnnouncement),
    ],
  entryComponents: [EditAnnouncement]
})
export class EditAnnouncementPageModule {}