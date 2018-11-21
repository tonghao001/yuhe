import { PrincipalEmailPageModule } from './principalEmail/principalEmail.module';
import { EditAnnouncementPageModule } from './editAnnouncement/editAnnouncement.module';
import { AnnounceDetailsPageModule } from './announcement/announce-details.module';
import { AnnouncementPageModule } from './announcement/announcement.module';
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";
import { ChildManageModule } from "./childManage/childManage.module";
import { FeedbackEmailPageModule } from './feedbackEmail/feedbackEmail.module';
import {ChartModule} from 'angular-highcharts';

@NgModule({
  declarations:[
    HomePage,
  ],
  imports:[
    IonicPageModule.forChild(HomePage),
    ChartModule,
    ChildManageModule,
    AnnouncementPageModule,
    AnnounceDetailsPageModule,
    EditAnnouncementPageModule,
    FeedbackEmailPageModule,
    PrincipalEmailPageModule
  ],
  
  entryComponents:[
    HomePage,
  ]
})

export class HomePageModule {};