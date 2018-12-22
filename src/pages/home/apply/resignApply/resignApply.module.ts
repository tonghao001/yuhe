import { ApprovalNetwork } from './../../../../network/approval.network';
import { ResignApply } from "./resignApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";


@NgModule({
  declarations: [ResignApply],
  imports: [
      IonicPageModule.forChild(ResignApply),
    ],
  entryComponents: [ResignApply],
  providers: [ApprovalNetwork]
})
export class ResignApplyPageModule {}