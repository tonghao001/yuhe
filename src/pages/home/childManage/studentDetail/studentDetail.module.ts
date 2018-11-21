import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudentDetailPage } from "./studentDetail";

@NgModule({
  declarations:[
    StudentDetailPage
  ],
  imports:[
    IonicPageModule.forChild(StudentDetailPage)
  ],
  entryComponents:[
    StudentDetailPage
  ]
})
export class StudentDetailPageModule {};