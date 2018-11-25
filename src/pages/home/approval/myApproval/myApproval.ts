import { Component } from "@angular/core";
import { NavParams, IonicPage, NavController } from "ionic-angular";

@IonicPage({
  name: "app-home-my-approval"
})
@Component({
  templateUrl: "myApproval.html",
  selector: "myApproval.ts"
})
export class MyApproval {
  items;
  isApproval: string = "false";
  constructor(public navCtrl: NavController, params: NavParams) {
    this.items = [
      {
        name: "肥妹仔",
        type: "类型：请假（婚假）",
        statusString: "待审批",
        status: "one"
      },
      {
        name: "肥妹仔",
        type: "类型：请假（婚假）",
        statusString: "已审批",
        status: "two"
      },
      {
        name: "肥妹仔",
        type: "类型：请假（婚假）",
        statusString: "未通过",
        status: "three"
      },
      {
        name: "肥妹仔",
        type: "类型：请假（婚假）",
        statusString: "未审批",
        status: "one"
      },
      {
        name: "肥妹仔",
        type: "类型：请假（婚假）",
        statusString: "未审批",
        status: "one"
      }
    ];
  }

  clickItem(item) {
    this.navCtrl.push('app-home-approval-details', item);
  }

  doRefresh(event) {
    console.log("Begin async operation");
    setTimeout(() => {
      console.log("Async operation has ended");
      event.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      console.log("Done");
      event.complete();
    }, 500);
  }
}
