import { Component, Output, EventEmitter } from '@angular/core';
import { formatDate } from "../../network/http";

/**
 * Generated class for the YearSwitchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'year-switch',
  templateUrl: 'year-switch.html'
})
export class YearSwitchComponent {
  @Output() prevYearChange: EventEmitter<Date> = new EventEmitter();
  @Output() nextYearChange: EventEmitter<Date> = new EventEmitter();

  private formatString = 'yyyy';
  currentYearString = formatDate(new Date(), this.formatString);

  constructor() {
    console.log('Hello YearSwitchComponent Component');
    this.currentYearString = '2018';
  }

  prevYear(){
    let currentYear = new Date(this.currentYearString);
    currentYear.setFullYear(currentYear.getFullYear() - 1);
    this.currentYearString = formatDate(new Date(currentYear), this.formatString);
    this.nextYearChange.emit(new Date(this.currentYearString));
  }
  nextYear(){
    let currentYear = new Date(this.currentYearString);
    currentYear.setFullYear(currentYear.getFullYear() + 1);
    this.currentYearString = formatDate(new Date(currentYear), this.formatString);
    this.nextYearChange.emit(new Date(this.currentYearString));
  }

}
