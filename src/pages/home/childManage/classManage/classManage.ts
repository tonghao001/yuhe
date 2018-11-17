import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-classManage'
})
@Component({
  templateUrl: 'classManage.html'
})

export class ClassManagePage {

  doRefresh(event){
    console.log('refresh');
    console.log('refresh');
    console.log('refresh');

    console.log('refresh');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  
  }

  loadMore(event){
  
  }

}
