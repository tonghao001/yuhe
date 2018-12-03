import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@IonicPage({
  name: 'app-home-newSchedule'
})
@Component({
  templateUrl: 'newSchedule.html'
})
export class NewSchedulePage {
  constructor(private navCtrl: NavController) {
  }

  goToPage(pageName, id) {
    pageName = pageName || 'app-home-childCheckList';
    console.log('id:', id);
    this.navCtrl.push(pageName, { id: id });
  }


}
