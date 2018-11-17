import { Component } from '@angular/core';
import { NavParams, NavController, IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'app-home-announcement',
})

@Component({
    templateUrl: 'announcement.html',
    selector: 'announcement.ts'
})

export class Announcement {
    props;
    items;
    isRead: string = "false";
    
    constructor(public navCtrl: NavController, params: NavParams) {
        this.props = params.data;
        this.items = [
            {
                picture: "assets/icon/thumbnail-puppy-1.jpg",
                title: '肥仔美',
                subTitle: "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
                badage: 10,
            },
            {
                picture: "assets/icon/thumbnail-puppy-3.jpg",
                title: '肥仔美',
                subTitle: "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
                badage: 10,
            },
            {
                picture: "assets/icon/thumbnail-puppy-4.jpg",
                title: '肥仔美',
                subTitle: "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
                badage: 10,
            },
            {
                picture: "assets/icon/thumbnail-puppy-4.jpg",
                title: '肥仔美',
                subTitle: "你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!你好院长我是肥仔美的妈妈!",
                badage: 10,
            },
        ];
    }

    clickItem(item) {
        this.navCtrl.push('app-home-announce-details', item);
    }
}