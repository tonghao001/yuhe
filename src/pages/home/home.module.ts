import { RestApplyPageModule } from './apply/restApply/restApply.module';
import { CopyToMePageModule } from './approval/copyToMe/copyToMe.module';
import { StartByMePageModule } from './approval/startByMe/startByMe.module';
import { MyApprovalPageModule } from './approval/myApproval/myApproval.module';
import { SalaryPageModule } from './salary/salary.module';
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
import { ApprovalDetailsPageModule } from './approval/approvalDetails/approvalDetails.module';
import { kindergartenOverviewModule } from "./kindergartenOverview/kindergartenOverview.module";
import { MessageService } from '../../service/message.service';
import { ConfirmService } from '../../service/confirm.service';
import { ActionSheetService } from '../../service/actionSheet.service';
import { CheckInPageModule } from './checkIn/checkInPage/checkIn.module';
import { ApprovalPageModule } from './approval/approvalPage/approvalPage.module';
import { ProcurementApplyPageModule } from './apply/procurementApply/procurementApply.module';


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
    PrincipalEmailPageModule,
    MyApprovalPageModule,
    ApprovalDetailsPageModule,
    SalaryPageModule,
    kindergartenOverviewModule,
    CheckInPageModule,
    ApprovalPageModule,
    StartByMePageModule,
    CopyToMePageModule,
    RestApplyPageModule,
    ProcurementApplyPageModule,
  ],
  providers:[
    MessageService,
    ConfirmService,
    ActionSheetService
  ],
  entryComponents:[
    HomePage,
  ]
})

export class HomePageModule {};