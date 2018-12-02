import { ResignApply } from "./resignApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ResignApply],
  imports: [
      IonicPageModule.forChild(ResignApply),
    ],
  entryComponents: [ResignApply]
})
export class ResignApplyPageModule {}