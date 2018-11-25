import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LoadingService } from '../../service/loading.service';

@IonicPage({
  name: 'app-forget-password',
  segment: 'app-forget-password'
})
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forgetPassword.html'
})
export class ForgetPasswordPage {
  constructor(private loadingService: LoadingService) {

  }

  username: string = '';
  validCode: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSure(): void {
    console.log(this.username, this.validCode, this.newPassword, this.confirmPassword);
    this.loadingService.show({content:'请稍后'});

  }

}