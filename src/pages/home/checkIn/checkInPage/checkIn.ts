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
    companyLocation: [];
    userLocation: [];
    today:any = Date.now();//或者today:any = new Date();
    timer:any;
    constructor(
         params: NavParams,
         public nav: NavController,
         public checkNetWork: CheckNetwork,
         private storage: StorageService,
        ) {
        let loginInfo = this.storage.get(STORAGE_KEY.LOGIN_INFO);
        console.log(userInfo);
        this.user = {
            name: loginInfo.username,
            team: '考勤组: 技术部',
        }
        this.timer=setInterval(()=> {
            this.today = Date.now();// 或者this.today = new Date();
        }, 1000)

        // this.checkNetWork.getCompanyLocation

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