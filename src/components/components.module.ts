import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CalendarComponent } from './calendar/calendar';


@NgModule({
	declarations: [
		CalendarComponent
	],
	imports: [IonicModule],
	exports: [
		CalendarComponent]
})
export class ComponentsModule { }
