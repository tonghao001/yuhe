import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MessagePage } from "./message";
import { CalendarComponent } from '../../components/calendar/calendar';

@NgModule({
  declarations:[
    MessagePage,
    CalendarComponent
  ],
  imports:[
    IonicPageModule.forChild(MessagePage)
  ],
  entryComponents:[
    MessagePage,
  ],
  providers:[
    CalendarComponent
  ],
})
export class MessagePageModule {
  
}
