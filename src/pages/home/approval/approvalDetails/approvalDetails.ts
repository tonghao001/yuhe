import { Component } from "@angular/core";
import { IonicPage, AlertController, NavParams } from "ionic-angular";

@IonicPage({
  name: "app-home-approval-details"
})
@Component({
  templateUrl: "approvalDetails.html",
  selector: "approvalDetails.ts"
})
export class ApprovalDetails {
  item;

  approvalPersons;
  constructor(public alertCtrl: AlertController, params: NavParams) {

    this.item = params.data;
    this.approvalPersons = [
      {
        image: "",
        name: "我发起的审批",
        date: "2018-2-12"
      },
      {
        image: "",
        name: "小名",
        date: "2018-2-12"
      },
      {
        image: "",
        name: "小绿",
        date: "2018-2-12",
        last: "last"
      }
    ];
  }

  approvalClick() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要通过审批吗?",
      buttons: [
        {
          text: "不通过",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "通过",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  disApprovalClick() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要不通过审批吗?",
      buttons: [
        {
          text: "取消",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "确定",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  withDrow() {
    
  }
}
