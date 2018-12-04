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
    today:any = Date.now();//或者today:any = new Date();
    timer:any;
    constructor(params: NavParams, public nav: NavController) {
        this.user = {
            name: '小肉丸',
            team: '考勤组: 技术部',
        }
        this.timer=setInterval(()=> {
            this.today = Date.now();// 或者this.today = new Date();
        }, 1000)

    }
    ngOnDestroy(){
        clearInterval(this.timer);
     }

    attendanceRecord() {
        this.nav.push('app-home-attendanceReport');
    }

    checkInClick() {
        
    }

    reloadLocation() {

    }
}