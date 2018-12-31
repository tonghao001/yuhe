import { Component, Output, EventEmitter } from '@angular/core';
import { formatDate } from "../../network/http";

/**
 * Generated class for the SeasonSwitchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'season-switch',
  templateUrl: 'season-switch.html'
})
export class SeasonSwitchComponent {
  @Output() prevSeasonChange: EventEmitter<Date> = new EventEmitter();
  @Output() nextSeasonChange: EventEmitter<Date> = new EventEmitter();

  private formatString = 'yyyy 第q+季度';
  currentSeasonString = formatDate(new Date(), this.formatString);
  currentDate = new Date(this.currentSeasonString);

  constructor() {
    // this.currentSeasonString = '2018 第一季度';
  }


  currentSeason = 1;
  loadSeason(){

    
  }

  // Math.floor((this.getMonth() + 3) / 3), //季度

  prevSeason(){
    let currentYear = new Date(this.currentSeasonString);
    currentYear.setFullYear(currentYear.getMonth() -3 - 1);
    // this.currentYearString = formatDate(new Date(currentYear), this.formatString);
    // this.nextYearChange.emit(new Date(this.currentYearString));
  };
  // nextSeason(){
  //   let currentYear = new Date(this.currentYearString);
  //   currentYear.setFullYear(currentYear.getFullYear() - 1);
  //   this.currentYearString = formatDate(new Date(currentYear), this.formatString);
  //   this.nextYearChange.emit(new Date(this.currentYearString));
  // }

}
