import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserNetwork } from '../../network/user.network';
import { ToastService } from '../../service/toast.service';
import { StorageService, STORAGE_KEY } from '../../service/storage.service';
import { LoadingService } from '../../service/loading.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    private userNetwork: UserNetwork,
    private toastService: ToastService,
    private storage: StorageService,
    private loading: LoadingService,
  ) {

  }
  isRememberPassword: Boolean = false;
  username = '';
  password = '';


  ionViewDidEnter() {
    let loginInfo = this.storage.get(STORAGE_KEY.LOGIN_INFO);
    if (loginInfo && typeof loginInfo === "object") {
      this.username = loginInfo.username;
      this.password = loginInfo.password;
      this.isRememberPassword = true;
    }
  }

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

    this.loading.show();
    this.userNetwork.login({
      account: this.username,
      password: this.password
    }).subscribe((data: { status?: string }) => {
      this.loading.hide();
      console.log(data);
      if (data.status) {
        return;
      }
      if (this.isRememberPassword) {
        this.storage.set(STORAGE_KEY.LOGIN_INFO, { username: this.username, password: this.password });
      }
      else {
        this.storage.set(STORAGE_KEY.LOGIN_INFO, null);
      }

      this.storage.set(STORAGE_KEY.USER_INFO, data);
      this.navCtrl.push('app-tab', { id: 2 });
    }, err => {
      this.loading.hide();
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
