import { ApprovalDetails } from "./approvalDetails";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ApprovalDetails],
  imports: [
      IonicPageModule.forChild(ApprovalDetails),
    ],
  entryComponents: [ApprovalDetails]
})
export class ApprovalDetailsPageModule {}