import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetService } from '../../service/actionSheet.service';
import { UserNetwork } from "../../network/user.network";
import { ToastService } from "../../service/toast.service";
import { LoginPage } from "../../pages/login/login";

@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {
  constructor(
    private navCtrl: NavController,
    private actionSheetService: ActionSheetService,
    private userNetwork: UserNetwork,
    private toastService: ToastService) {
    }

  showActionSheet(): void {
    this.actionSheetService.show({
      title: '退出后，您不再收到来自雨荷的消息',
      buttons: [{
        text: '退出登录',
        role: 'destructive',
        handler: () => {
          //todo 跳转到登录
          this.logOut();
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

  logOut():void{
    this.userNetwork.logout().subscribe((data:{status:number, message?:string}) => {
      console.log(data);
      if(data.status === 0){
        this.navCtrl.setRoot(LoginPage);
      }

    }, err => {
      this.toastService.show(err.message || '登出失败');
    })
  }
  
  goToPage(pageName, id): void{
    pageName = pageName || 'app-me-changePassword';
    this.navCtrl.push(pageName, { id: id });
  }
}