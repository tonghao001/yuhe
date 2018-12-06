import { Component, ChangeDetectorRef } from '@angular/core';

/**
 * Generated class for the CalendarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'calendar',
  templateUrl: 'calendar.html'
})
export class CalendarComponent{
  private calendar;

  constructor(public changeDetectorRef: ChangeDetectorRef) { /*构造函数*/
    this.calendar = {
      weekNames: ['一', '二', '三', '四', '五', '六', '日'],
      now: new Date(),
      dates: [],
      toggleDate: (date) => {
        date.active = !date.active;
      },
      currentActiveDate: null,
      currentMonthFirstDay: this.getFirstDateOfTheDate(new Date()),
      changeCurrentActive: (date) => {
        if (!date || !date.number) {
          return;
        }
        if (this.calendar.currentActiveDate) {
          this.calendar.currentActiveDate.active = false;
        }
        date.active = !date.active;
        this.calendar.currentActiveDate = date;
      }
    };
    
    this.loadCalendarBoard(this.calendar.now);
  }

  //获取点击日期
  getActiveDate(){
    if(!this.calendar.currentActiveDate){
      return null;
    }
    return this.calendar.currentActiveDate.date;
  }

  nextMonth(){
    this.calendar.currentMonthFirstDay.setMonth(this.calendar.currentMonthFirstDay.getMonth() + 1);
    this.loadCalendarBoard(this.calendar.currentMonthFirstDay);
    this.calendar.currentMonthFirstDay = new Date(this.calendar.currentMonthFirstDay);//重新赋值，界面才会发生变化
  }
  prevMonth(){
    this.calendar.currentMonthFirstDay.setMonth(this.calendar.currentMonthFirstDay.getMonth() - 1);
    this.loadCalendarBoard(this.calendar.currentMonthFirstDay);
    this.calendar.currentMonthFirstDay = new Date(this.calendar.currentMonthFirstDay);//重新赋值，界面才会发生变化
  }

  //面板数据
  private loadCalendarBoard(theDate) {

    let firstDayWeekdayTheMonth = this.getFirstDayWeekdayByTheDate(theDate);//当月第一天为周几
    this.calendar.dates = [];
    for (let i = 1; i < firstDayWeekdayTheMonth; i++) {
      this.calendar.dates.push({ number: '' });//当月第一天为周几，前面补空
    }//当月第一天为周几，面板第一天之前补空
    
    let now = new Date();
    let theFirstDateTimestamp = this.getFirstDateOfTheDate(theDate).getTime();
    let totalDayCountThisMonth = this.getDayCount(theDate);
    for (let i = 1; i <= totalDayCountThisMonth; i++) {
      let currentDate = new Date(new Date(theFirstDateTimestamp).setDate(i));
      let actived = this.calendar.currentActiveDate && this.calendar.currentActiveDate.date.getTime() === currentDate.getTime();//已选日期是否是这个日期一致
      let date = {
        number: i, 
        active:  actived,
        today: this.isSameYearMonthOfTheTwoDate(theDate, now) && now.getDate() === i, 
        flag: false, 
        date: currentDate,
        extra: {} 
      }
      if(actived){
        this.calendar.currentActiveDate = date;
      }
      this.calendar.dates.push(date);
    }
    this.calendar.now = now;
  }

  //两个日期是否是同年同月
  private isSameYearMonthOfTheTwoDate(theDate, otherDate){
    return  theDate.getMonth() === otherDate.getMonth() && theDate.getFullYear() === otherDate.getFullYear();
  }
  //根据指定日期，获取该日期所在月的第一天是周几。例如：2018-12-12这天的1号是周几
  private getFirstDayWeekdayByTheDate(theDate) {
    return this.getWeekdayOfTheDate(this.getFirstDateOfTheDate(theDate));
  }
  //获取指定日期那个月的第一天的日期
  private getFirstDateOfTheDate(theDate) {
    let newDate = new Date(theDate.getTime());//设置该日期的第一天时会改变原来的日期，所以要先转一下
    return new Date(newDate.setDate(1));
  }
  //获取指定日期为星期几
  private getWeekdayOfTheDate(theDate) {
    return theDate.getDay() || 7;//本月第一天为周几，周日为7
  }
  //判断是否是闰年
  private isLeapYear(year) {
    if (year % 100 == 0 && year % 400 == 0) {
      return true;
    } else if (year % 100 != 0 && year % 4 == 0) {
      return true;
    }
    return false;
  }
  //得到某月多少天
  private getDaysOfMonth(isLeapYear, month) {
    let days = 0;
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        days = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      case 2:
        if (isLeapYear) {
          days = 29;
        } else {
          days = 28;
        }
    }
    return days;
  }
  //获取某日期当月总共多少天
  private getDayCount(theDate) {
    let isLeapYear = this.isLeapYear(theDate.getFullYear());
    let month = theDate.getMonth() + 1;
    return this.getDaysOfMonth(isLeapYear, month);
  }

}

