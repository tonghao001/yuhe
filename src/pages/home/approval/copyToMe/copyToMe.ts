import { Component } from "@angular/core";
import { NavParams, NavController, IonicPage } from "ionic-angular";

@IonicPage({
  name: "app-home-copyTome"
})
@Component({
  templateUrl: "copyToMe.html",
  selector: "copyToMe.ts"
})
export class CopyToMe {
  props;
  items;
  isRead: string = "false";

  constructor(public navCtrl: NavController, params: NavParams) {
    this.props = params.data;
    this.items = [
      {
        picture: "assets/icon/thumbnail-puppy-1.jpg",
        title: "肥仔美",
        subTitle:
          "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
        badage: 10,
        type: 2,
      },
      {
        picture: "assets/icon/thumbnail-puppy-3.jpg",
        title: "肥仔美",
        subTitle:
          "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
        badage: 10,
        type: 2,
      },
      {
        picture: "assets/icon/thumbnail-puppy-3.jpg",
        title: "肥仔美",
        subTitle:
          "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
        badage: 10,
        type: 2,
      },
      {
        picture: "assets/icon/thumbnail-puppy-3.jpg",
        title: "肥仔美",
        subTitle:
          "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
        badage: 10,
        type: 2,
      }
    ];
  }

  clickItem(item) {
    this.navCtrl.push("app-home-approval-details", item);
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