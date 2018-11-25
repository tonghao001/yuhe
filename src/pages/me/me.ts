import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  constructor(public navCtrl: NavController, public  actionSheetController: ActionSheetController) {
      
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "退出后，您不再收到来自雨荷的消息",
      buttons: [{
        text: '退出登录',
        role: 'destructive',
        handler: ()=>{
          //todo 跳转到登录
          // this.navCtrl.push('page-login');
        },
       }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}