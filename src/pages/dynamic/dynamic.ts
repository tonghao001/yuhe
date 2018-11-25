import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'dynamic.html'
})
export class DynamicPage { 
  constructor(public nav: NavController) {
      
  }
  announcementClick() {
    this.nav.push('app-home-announcement');
  }
  princeipalEmailClick() {
    this.nav.push('app-home-principal-email');
  }
  myApprovalClick() {
    this.nav.push('app-home-my-approval');
  }
  salaryButtonClick() {
    this.nav.push('app-home-salary');

  }
}
