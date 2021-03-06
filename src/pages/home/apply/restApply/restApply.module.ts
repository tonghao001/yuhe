import { ApprovalNetwork } from './../../../../network/approval.network';
import { RestApply } from "./restApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [RestApply],
  imports: [
      IonicPageModule.forChild(RestApply),
    ],
  entryComponents: [RestApply],
  providers: [ApprovalNetwork, DatePipe],
})
export class RestApplyPageModule {}