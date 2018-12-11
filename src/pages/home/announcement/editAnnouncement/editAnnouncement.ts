import { Component } from "@angular/core";
import { NavParams, IonicPage, AlertController } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  constructor(params: NavParams, public alert: AlertController, private geolocation: Geolocation) {
  }

  addNewReciver() {

    const prompt = this.alert.create({
      title: "收件人",
      message: "",
      inputs: [
        {
          name: "email",
          type: "email",
          placeholder: "请输入邮箱"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Save",
          handler: data => {
            this.reciverList.push(data.email);
          }
        }
      ]
    });
    prompt.present();
  }

  addPicture() {
    this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude
      resp.coords.longitude

      const prompt = this.alert.create({
        title: "请求成功",
        message: resp.coords.latitude + ", " + resp.coords.longitude
      });

      prompt.present();
      
     }).catch((error) => {
      const prompt = this.alert.create({
        title: "请求失败",
        message: error
      });

      prompt.present();
       console.log('Error getting location', error);
     });
  }

  sendAnnounceMent() {
      
  }
}
