import { EditAnnouncementPageModule } from './management/editAnnouncement/editAnnouncement.module';
import { AnnounceDetailsPageModule } from './management/announcement/announce-details.module';
import { AnnouncementPageModule } from './management/announcement/announcement.module';
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

import { ChildManageModule } from "./childManage/childManage.module";

@NgModule({
  declarations:[
    HomePage,
  ],
  imports:[
    IonicPageModule.forChild(HomePage),
    ChildManageModule,
    AnnouncementPageModule,
    AnnounceDetailsPageModule,
    EditAnnouncementPageModule
  ],
  
  entryComponents:[
    HomePage,
  ]
})

export class HomePageModule {};