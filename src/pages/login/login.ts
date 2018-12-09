import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserNetwork } from '../../network/user.network';
import { MessageService } from '../../service/message.service';
import { ToastService } from '../../service/toast.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    private userNetwork: UserNetwork,
    private messageService: MessageService,
    private toastService: ToastService
  ) {

  }
  isRememberPassword: Boolean = false;
  username = '';
  password = '';

  onRememberPassword(): void {
    console.log(this.isRememberPassword);
  }

  onLogin(): void {
    if (!this.username) {
      return this.toastService.show('请输入用户名');
    }
    if (!this.password) {
      return this.toastService.show('请输入密码');
    }

    this.userNetwork.login({
      username: this.username,
      password: this.password
    }).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })

    // this.navCtrl.push('app-tab', { id: 123 });
  }
  onForgetPassword() {
    this.navCtrl.push('app-forget-password');
  }

}
