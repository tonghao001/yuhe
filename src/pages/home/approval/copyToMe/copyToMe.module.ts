import { CopyToMe } from "./copyToMe";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [CopyToMe],
  imports: [
      IonicPageModule.forChild(CopyToMe),
    ],
  entryComponents: [CopyToMe]
})
export class CopyToMePageModule {}
