import { Component } from "@angular/core";
import { NavParams, IonicPage, NavController } from "ionic-angular";
import { setInterval } from "timers";

@IonicPage({
    name: "app-home-checkIn",
})
@Component({
  templateUrl: "checkIn.html",
  selector: "checkIn.ts"
})


export class CheckInPage {
    user;
    today = new Date();
    nowTime = new Date();
    constructor(params: NavParams, public nav: NavController) {
        this.user = {
            name: '小肉丸',
            team: '考勤组: 技术部',
        }
        setInterval(this.timerRun, 1000)
    }

    attendanceRecord() {
        this.nav.push('app-home-attendance-rank');
    }

    checkInClick() {
        
    }

    reloadLocation() {

    }

    timerRun() {
       this.nowTime = new Date();
    }
}