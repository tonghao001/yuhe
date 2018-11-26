import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { LoadingService } from '../../../service/loading.service';

@IonicPage({
  name: 'app-me-changePassword',
  segment: 'app-me-changePassword'
})
@Component({
  selector: 'page-me-changePassword',
  templateUrl: 'changePassword.html'
})
export class ChangePasswordPage {
  constructor(private loadingService: LoadingService) {

  }

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  onSure(): void {
    console.log(this.oldPassword, this.newPassword, this.confirmPassword);
    this.loadingService.show({content:'请稍后'});
  }

}