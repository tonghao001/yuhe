import { Component } from "@angular/core";
import { NavParams, NavController, IonicPage } from "ionic-angular";
import { NoticeNetWork } from './../../../network/notice.network';

@IonicPage({
  name: "app-home-announcement"
})
@Component({
  templateUrl: "announcement.html",
  selector: "announcement.ts"
})
export class Announcement {
  props;
  readNotiList = [{
    "ggbt": "",
    "zgxm": "费在美",
    "nr": "你好院长，我是费在美的家长",
  }];
  unReadNotiList = [{
    "ggbt": "",
    "zgxm": "费在美",
    "nr": "你好院长，我是费在美的家长",
  }];
  isRead: string = "false";

  constructor(
    public navCtrl: NavController, 
    params: NavParams,
    private notiNetWork: NoticeNetWork
    ) {
    this.props = params.data;

    this.notiNetWork.getReadNoticeList().subscribe((data: {result}) => {
      console.log(data);
      // this.readNotiList = data.result;
    }, err => {
      console.log(err)
    })

    this.notiNetWork.getunReadNoticeList().subscribe((data: {result}) => {
      console.log(data);
      // this.unReadNotiList = data.result;
    }, err => {
      console.log(err)
    })
  }

  clickItem(item) {
    /// 是否阅读
    item.irRead = this.isRead;
    this.navCtrl.push("app-home-announce-details", item,);
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

  editAnnouncemnetClick() {
    this.navCtrl.push("app-home-edit-announcement");
  }
}
