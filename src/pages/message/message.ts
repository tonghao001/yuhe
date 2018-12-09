
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Chooser } from '@ionic-native/chooser/ngx';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  private currentSelectDate;
  private defaultSelectToday;
  
  constructor(public navCtrl: NavController,private imageChooser: Chooser) {
    this.currentSelectDate = null;
    this.defaultSelectToday =true;
  }

  getFile(){
    console.log('begin getFile()');
    console.log(this.imageChooser);
    console.log('image chooser ');
    try {
      
    this.imageChooser.getFile('image/gif')
    .then(file => {
      console.log(file ? file.name : 'canceled')
    })
    .catch((error: any) => console.error(error));
    } catch (error) {
      alert(error);
    }
  }

  
  selectDateChange(newDate){
    this.currentSelectDate = newDate;
    console.log('change');
  }

  goToClassManage() {
    this.navCtrl.push('app-home-classManage', { id: 123 });
  }

  goToChildCheckOnManage() {
    this.navCtrl.push('app-home-childCheckOnManage', { id: 123 });
  }
}