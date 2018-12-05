import { Component } from '@angular/core';

@Component({
    selector: 'sl-user',
    template: `
    <h2>大家好，我是{{name}}</h2>
    <p>我来自<strong>{{address.province}}</strong>省,
      <strong>{{address.city}}</strong>市
    </p>
    `
})
export class UserComponent {
    name = 'Semlinker';
    address = {
        province: '福建',
        city: '厦门'
    };
}