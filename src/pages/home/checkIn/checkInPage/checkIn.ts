import { Component } from "@angular/core";
import { NavParams, IonicPage } from "ionic-angular";

@IonicPage({
    name: "app-home-checkIn",
})


@Component({
  templateUrl: "checkIn.html",
  selector: "checkIn.ts"
})


export class CheckInPage {
    user;
    constructor(params: NavParams) {
        this.user = {
            name: '小肉丸',
            team: '考勤组: 技术部',
        }
    }

    attendanceRecord() {

    }

    checkInClick() {
        
    }

    reloadLocation() {

    }
}