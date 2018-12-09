import { Component } from "@angular/core";
import {
  IonicPage,
  AlertController,
  NavParams,
  ActionSheetController
} from "ionic-angular";

@IonicPage({
  name: "app-home-rest-apply",
})
@Component({
  templateUrl: "RestApply.html",
  selector: "RestApply.ts"
})
export class RestApply {
  approvalPersons;
  startTime;
  endTime;
  constructor(
    public alertCtrl: AlertController,
    params: NavParams,
    public actionSheet: ActionSheetController
  ) {
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

  async selectRestType() {
    const actionSheet = await this.actionSheet.create({
      buttons: [
        {
          text: "病假",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "调休",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "事假",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "年假",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }

  resetApply() {
    const confirm = this.alertCtrl.create({
      title: "",
      message: "你确定要通过申请吗?",
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
}
