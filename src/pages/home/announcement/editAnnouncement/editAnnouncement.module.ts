// import { Geolocation } from '@ionic-native/geolocation/ngx';
import { EditAnnouncement } from "./editAnnouncement";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { NoticeNetWork } from "./../../../../network/notice.network";

@NgModule({
  declarations: [EditAnnouncement],
  imports: [
      IonicPageModule.forChild(EditAnnouncement),
    ],
  entryComponents: [EditAnnouncement],
  providers: [
    // Geolocation,
    NoticeNetWork
  ]
})
export class EditAnnouncementPageModule {}