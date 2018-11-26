import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MePage } from "./me";

import { AboutPageModule } from "./about/about.module";
import { ChangePasswordPageModule } from "./changePassword/changePassword.module";


@NgModule({
  declarations:[
    MePage
  ],
  imports:[
    IonicPageModule.forChild(MePage),
    AboutPageModule,
    ChangePasswordPageModule
  ],
  entryComponents:[
    MePage
  ]
})
export class MePageModule {};