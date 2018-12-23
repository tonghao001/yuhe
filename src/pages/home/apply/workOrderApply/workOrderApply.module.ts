import { ApprovalNetwork } from './../../../../network/approval.network';
import { WorkOrderApply } from "./workOrderApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";


@NgModule({
  declarations: [WorkOrderApply],
  imports: [
      IonicPageModule.forChild(WorkOrderApply),
    ],
  entryComponents: [WorkOrderApply],
  providers: [ApprovalNetwork],
})
export class WorkOrderApplyPageModule {
    
}