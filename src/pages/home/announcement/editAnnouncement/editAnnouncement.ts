import { Component } from "@angular/core";
import { NavParams, IonicPage, AlertController } from "ionic-angular";

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
  constructor(params: NavParams, public alert: AlertController) {
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

  }

  sendAnnounceMent() {
      
  }
}
