import { Salary } from "./salary";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [Salary],
  imports: [
      IonicPageModule.forChild(Salary),
    ],
  entryComponents: [Salary]
})
export class SalaryPageModule {}