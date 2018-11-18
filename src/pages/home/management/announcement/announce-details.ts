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
  users;
  constructor(public alertController: AlertController, params: NavParams) {
    this.item = params.data;
    this.users = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    ];
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
          }
        }
      ]
    });

    await alert.present();
  }

}
