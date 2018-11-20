import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudentManagePage } from "./studentManage";

@NgModule({
  declarations:[
    StudentManagePage
  ],
  imports:[
    IonicPageModule.forChild(StudentManagePage)
  ],
  entryComponents:[
    StudentManagePage
  ]
})
export class StudentManagePageModule {};