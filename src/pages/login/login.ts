import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserNetwork } from '../../network/user.network';
import { ToastService } from '../../service/toast.service';
import { StorageService, STORAGE_KEY } from '../../service/storage.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    private userNetwork: UserNetwork,
    private toastService: ToastService,
    private storage: StorageService
  ) {

  }
  isRememberPassword: Boolean = false;
  username = '';
  password = '';

  onRememberPassword(): void {
    console.log(this.isRememberPassword);

    this.onSmsCode();
  }

  onLogin(): void {
    if (!this.username) {
      return this.toastService.show('请输入用户名');
    }
    if (!this.password) {
      return this.toastService.show('请输入密码');
    }

    this.userNetwork.login({
      account: this.username,
      password: this.password
    }).subscribe((data: { message?: string }) => {
      console.log(data);
      if (data.message) {
        return this.toastService.show(data.message);
      }

      this.storage.set(STORAGE_KEY.USER_INFO, data);
      this.navCtrl.push('app-tab', { id: 2 });
    }, err => {
      this.toastService.show(err.message || '登录失败');
    })

  }
  onSmsCode() {
    this.userNetwork.getSMSCode({
      mobileNo: '13918429709'
    }).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

  onForgetPassword() {
    this.navCtrl.push('app-forget-password');
  }

}
