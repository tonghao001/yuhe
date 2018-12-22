import { ApprovalNetwork } from './../../../../network/approval.network';
import { StationeryApply } from "./stationeryApply";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [StationeryApply],
  imports: [
      IonicPageModule.forChild(StationeryApply),
    ],
  entryComponents: [StationeryApply],
  providers: [ApprovalNetwork],
})
export class StationeryApplyPageModule {
    
}