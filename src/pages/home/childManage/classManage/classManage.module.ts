import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ClassManagePage } from "./classManage";

@NgModule({
  declarations:[
    ClassManagePage
  ],
  imports:[
    IonicPageModule.forChild(ClassManagePage)
  ],
  entryComponents:[
    ClassManagePage
  ]
})
export class ClassManagePageModule {};