import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage({
  name: 'app-home-studentDetail'
})
@Component({
  templateUrl: 'studentDetail.html'
})

export class StudentDetailPage {
  student;
  constructor() {
    
    this.student = {
      code: 'student001',
      name: '吴鑫桐',
      className: '大三',
      age: 4,
      birthday: '1996-05',
      address: '上海浦东新区X座11号',
      parents: [{
        name: '王刚',
        relation: '爸爸',
        mobile: '12893889111'
      },{
        name: '王芳',
        relation: '妈妈',
        mobile: '18321110999'
      }]
    };
  }

}
