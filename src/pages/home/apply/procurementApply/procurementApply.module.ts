import { ApprovalNetwork } from './../../../../network/approval.network';
import { ProcurementApply } from "./procurementApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";


@NgModule({
  declarations: [ProcurementApply],
  imports: [
      IonicPageModule.forChild(ProcurementApply),
    ],
  entryComponents: [ProcurementApply],
  providers: [ApprovalNetwork],
})
export class ProcurementApplyPageModule {
    
}