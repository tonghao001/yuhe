import { MyApproval } from "./myApproval";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [MyApproval],
  imports: [
      IonicPageModule.forChild(MyApproval),
    ],
  entryComponents: [MyApproval]
})
export class MyApprovalPageModule {}
