import { ChangePasswordPage } from "./changePassword";
import { IonicPageModule } from "ionic-angular";
import { NgModule } from "@angular/core";
import { LoadingService } from "../../../service/loading.service";

@NgModule({
  declarations: [ChangePasswordPage],
  imports: [
    IonicPageModule.forChild(ChangePasswordPage),
  ],
  providers: [LoadingService],
  entryComponents: [ChangePasswordPage]
})
export class ChangePasswordPageModule { }
