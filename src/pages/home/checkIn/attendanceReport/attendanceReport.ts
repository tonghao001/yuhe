import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
// import { UserComponent } from '../../../../component/calendar.component';

@IonicPage({
  name: 'app-home-attendanceReport'
})
@Component({
  templateUrl: 'attendanceReport.html'
})
export class AttendanceReportPage {
  constructor(private navCtrl: NavController) {
    this.currentReport = 'day';


    this.calendar = {
      weekNames: ['一', '二', '三', '四', '五', '六', '日'],
      now: new Date(),
      dates: [],
      init: () => {
        let now = new Date();
        this.calendar.now = now;
        let currentDate = now.getDate();
        //let currentWeekday = now.getDay()||7;//获取今天周几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7
        let firstWeekdayOfCurrentMonth = new Date(new Date().setDate(1)).getDay() || 7;//本月第一天为周几
        this.calendar.dates = [];
        console.log('firstWeekdayOfCurrentMonth:', firstWeekdayOfCurrentMonth);
        for (let i = 1; i < firstWeekdayOfCurrentMonth; i++) {
          this.calendar.dates.push({ number: '' });//本月第一天为周几，前面补空
        }
        console.log('dates:', this.calendar.dates);

        let totalDayCountThisMonth = this.getDayCount();
        console.log('totalDayCountThisMonth:', totalDayCountThisMonth);
        for (let i = 1; i <= totalDayCountThisMonth; i++) {
          this.calendar.dates.push({ number: i, active: false, today: currentDate === i, flag: currentDate + 1 === i, extra: {} });
        }
      },
      toggleDate: (date) => {
        date.active = !date.active;
      },
      currentActiveDate: null,
      changeCurrentActive: (date) => {
        if (!date.number) {
          return;
        }
        if (this.calendar.currentActiveDate) {
          this.calendar.currentActiveDate.active = false;
        }
        date.active = !date.active;
        this.calendar.currentActiveDate = date;
      }
    };
    this.calendar.init();
  }


  value: Date;
  currentReport;
  calendar;



  //判断是否是闰年
  isLeapYear(year) {
    if (year % 100 == 0 && year % 400 == 0) {
      return true;
    } else if (year % 100 != 0 && year % 4 == 0) {
      return true;
    }
    return false;
  }

  //得到某月多少天
  getDaysOfMonth(isLeapYear, month) {
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

  getDayCount() {
    let now = new Date();
    let isLeapYear = this.isLeapYear(now.getFullYear());
    let month = now.getMonth() + 1;
    return this.getDaysOfMonth(isLeapYear, month);
  }

  goToRankPage(): void {
    this.navCtrl.push('app-home-attendance-rank');
  }
  changeCurrentReport(reportType) {
    this.currentReport = reportType;
  }
}
