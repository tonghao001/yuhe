import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalendarComponent } from './calendar/calendar';
import { DateSwitchComponent } from './date-switch/date-switch';


@NgModule({
	declarations: [
		CalendarComponent,
    DateSwitchComponent
	],
	imports: [IonicModule],
	exports: [
		CalendarComponent,
    DateSwitchComponent]
})
export class ComponentsModule { }
