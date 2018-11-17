import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildManagePage } from "./childManage";
import { ClassManagePageModule } from "./classManage/classManage.module";

import { ChildCheckOnPageModule } from "./childCheckOn/childCheckOn.module";

@NgModule({
  declarations:[
    ChildManagePage
  ],
  imports:[
    IonicPageModule.forChild(ChildManagePage),
    ClassManagePageModule,
    ChildCheckOnPageModule
  ],
  entryComponents:[
    ChildManagePage
  ]
})
export class ChildManageModule {};