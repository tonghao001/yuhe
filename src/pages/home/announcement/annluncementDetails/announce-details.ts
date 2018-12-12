import { UserNetwork } from './../../../../network/user.network';
import { NoticeNetWork } from './../../../../network/notice.network';
import { Component } from "@angular/core";
import { NavParams, IonicPage, AlertController } from "ionic-angular";


@IonicPage({
    name: "app-home-announce-details",
})


@Component({
  templateUrl: "announce-details.html",
  selector: "announce-details.ts"
})

export class AnnounceDetails {
  item;
  isReadOpen = false;
  unReadOpen = false;

  unReadUsers = [];
  readUsers = [];
  noticeDetails = {
    "zgxm": "费在美",
    "nr": "你好院长，我是费在美的家长"
  };
  
  constructor(
    public alertController: AlertController, 
    params: NavParams,
    private notiNetWork: NoticeNetWork
    ) {
    this.item = params.data;
    if (this.item.isRead === 'true') {
      this.notiNetWork.getReadNoticeDetails(this.item.id).subscribe((data) => {
        console.log(data)
      }, error => {
        console.log(error)
      })
    } else {
      this.notiNetWork.getUnReadNoticeDetails(this.item.id).subscribe((data) => {
        console.log(data)
      }, error => {
        console.log(error)
      })
    }

    this.notiNetWork.getReadPersonList(this.item.id).subscribe((data) => {
      console.log(data)
    }, error => {
      console.log(error)
    })

    this.notiNetWork.getUnReadPersonList(this.item.id).subscribe((data) => {
      console.log(data)
    }, error => {
      console.log(error)
    })

  }


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: '已经一键提醒',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.notiNetWork.postNoticeForAllUsers(this.item.id).subscribe((data) => {
              console.log(data)
            }, error => {
              console.log(error)
            })
          }
        }
      ]
    });

    await alert.present();
  }

  readOpenClick() {
    this.isReadOpen = !this.isReadOpen;
  }

  unReadOpenClick() {
    this.unReadOpen = !this.unReadOpen;
  }
}
