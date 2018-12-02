import { RestApply } from "./restApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [RestApply],
  imports: [
      IonicPageModule.forChild(RestApply),
    ],
  entryComponents: [RestApply]
})
export class RestApplyPageModule {}