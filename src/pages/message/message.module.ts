import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MessagePage } from "./message";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations:[
    MessagePage,
    // CalendarComponent
  ],
  imports:[
    IonicPageModule.forChild(MessagePage),
    ComponentsModule
  ],
  entryComponents:[
    MessagePage
  ],
  exports:[
    // CalendarComponent
  ]
})
export class MessagePageModule {
  
}
