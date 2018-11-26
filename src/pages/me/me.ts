import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetService } from '../../service/actionSheet.service';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  constructor(
    private navCtrl: NavController,
    private actionSheetService: ActionSheetService) {

  }

  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({

  //     buttons: [{
  //       text: '退出登录',
  //       role: 'destructive',
  //       handler: () => {
  //         //todo 跳转到登录
  //         // this.navCtrl.push('page-login');
  //       },
  //     }, {
  //       text: '取消',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }],
  //     title: "退出后，您不再收到来自雨荷的消息"
  //   });
  //   await actionSheet.present();
  // }


  showActionSheet(): void {
    this.actionSheetService.show({
      title: '退出后，您不再收到来自雨荷的消息',
      buttons: [{
        text: '退出登录',
        role: 'destructive',
        handler: () => {
          //todo 跳转到登录
          // this.navCtrl.push('page-login');
        },
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
      ]
    })
  }
}