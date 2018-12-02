import { Component } from "@angular/core";
import { NavParams, IonicPage, NavController } from "ionic-angular";

@IonicPage({
  name: "app-home-approval-page"
})
@Component({
  templateUrl: "approvalPage.html",
  selector: "approvalPage.ts"
})
export class ApprovalPage {
    constructor(public navCtrl: NavController, params: NavParams) {

    }

    goToPage(pageName): void{
        pageName = pageName || 'app-home-classManage';
        this.navCtrl.push(pageName);
   }
}