import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChildCheckOn } from "./childCheckOn";

@NgModule({
  declarations:[
    ChildCheckOn
  ],
  imports:[
    IonicPageModule.forChild(ChildCheckOn)
  ],
  entryComponents:[
    ChildCheckOn
  ]
})
export class ChildCheckOnPageModule {};