import { DatePipe } from '@angular/common';
import { Component } from "@angular/core";
import { NavParams, IonicPage, NavController } from "ionic-angular";
import { setInterval } from "timers";
import { CheckNetwork } from "../../../../network/check.network";
import { StorageService, STORAGE_KEY } from '../../../../service/storage.service';
import { userInfo } from "os";

@IonicPage({
    name: "app-home-checkIn",
})
@Component({
  templateUrl: "checkIn.html",
  selector: "checkIn.ts"
})

export class CheckInPage {
    user;
    companyLocation = [];
    userLocation = [];
    today:any = Date.now();//或者today:any = new Date();
    timer:any;
    isChenckIn: boolean = true;
    checkData: any = {};

    constructor(
         params: NavParams,
         public nav: NavController,
         public checkNetWork: CheckNetwork,
         private storage: StorageService,
         public datePipe: DatePipe,
        ) {
        let loginInfo = this.storage.get(STORAGE_KEY.LOGIN_INFO);
        console.log(userInfo);
        this.user = {
            name: loginInfo.username,
            team: '考勤组: 技术部',
        }

        let middle = new Date("12:00:00");
        let now = new Date();

        if (now > middle) {
            this.isChenckIn = false;
        }

        this.timer=setInterval(()=> {
            this.today = Date.now();// 或者this.today = new Date();
        }, 1000)

        this.checkNetWork.getCompanyLocation().subscribe(
            (data: any) => {
              console.log(data);
              if (data) {
                this.companyLocation = [data.latitude, data.longitude];
              }
            },
            error => {
              console.log(error);
            });
    }
    ngOnDestroy(){
        clearInterval(this.timer);
     }

    attendanceRecord() {
        this.nav.push('app-home-attendanceReport');
    }

    checkInClick() {
        if (this.userLocation.length < 2) {
            return;
        }
        this.checkNetWork.checkIn({
            latitude: this.userLocation[0],
            longitude: this.userLocation[1],
        }).subscribe(
            (data: any) => {
              console.log(data);
              if (data) {
                this.companyLocation = [data.latitude, data.longitude];
              }
            },
            error => {
              console.log(error);
            });
    }

    reloadLocation() {

    }
}