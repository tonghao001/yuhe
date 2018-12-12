import { UserNetwork } from './../../../../network/user.network';
import { NoticeNetWork } from "./../../../../network/notice.network";
import { Component } from "@angular/core";
import { NavParams, IonicPage, AlertController } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";

@IonicPage({
  name: "app-home-edit-announcement"
})
@Component({
  templateUrl: "editAnnouncement.html",
  selector: "editAnnouncement.ts"
})

// todo 复用
export class EditAnnouncement {
  title;
  content;
  reciverList = [];
  constructor(
    params: NavParams,
    public alert: AlertController,
    private geolocation: Geolocation,
    private notiNetWork: NoticeNetWork
  ) {

  }

  addNewReciver() {
    const prompt = this.alert.create({
      title: "收件人",
      message: "",
      inputs: [
        {
          name: "user",
          type: "user",
          placeholder: "请输入用户名称"
        }
      ],
      buttons: [
        {
          text: "取消",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "保存",
          handler: data => {
            this.reciverList.push(data.user);
          }
        }
      ]
    });
    prompt.present();
  }

  addPicture() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        resp.coords.latitude;
        resp.coords.longitude;

        const prompt = this.alert.create({
          title: "请求成功",
          message: resp.coords.latitude + ", " + resp.coords.longitude
        });

        prompt.present();
      })
      .catch(error => {
        const prompt = this.alert.create({
          title: "请求失败",
          message: error
        });

        prompt.present();
        console.log("Error getting location", error);
      });
  }

  sendAnnounceMent() {
    this.notiNetWork.saveNewNotice({
      "ggbt": this.title,
      "nr": this.content,
       
    }).subscribe((data) => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }
}
