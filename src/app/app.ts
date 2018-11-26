import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      // statusBar.styleDefault();
      // this.statusBar.overlaysWebView(true);
      this.statusBar.overlaysWebView(false);
      // this.statusBar.show();
      this.statusBar.styleBlackTranslucent();
      // this.statusBar.backgroundColorByHexString('#03ccc6');
      // splashScreen.hide();
      // if (platform.is('ios')) {
      //   this.statusBar.backgroundColorByHexString("#33000000");
      // }
    });
  }
}

