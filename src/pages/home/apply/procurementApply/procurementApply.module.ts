import { ProcurementApply } from "./procurementApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [ProcurementApply],
  imports: [
      IonicPageModule.forChild(ProcurementApply),
    ],
  entryComponents: [ProcurementApply]
})
export class ProcurementApplyPageModule {
    
}