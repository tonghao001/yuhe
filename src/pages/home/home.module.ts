import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { HomePage } from "./home";

import { ChildManageModule } from "./childManage/childManage.module";

@NgModule({
  declarations:[
    HomePage
  ],
  imports:[
    IonicPageModule.forChild(HomePage),
    ChildManageModule
  ],
  
  entryComponents:[
    HomePage
  ]
})





// @NgModule({
//   declarations: [TabPage],
//   imports: [
//     IonicPageModule.forChild(TabPage),
//     MessagePageModule,
//     DynamicPageModule,
//     HomePageModule,
//     ContactPageModule,
//     MePageModule
//   ],
//   entryComponents: [TabPage]
// })

export class HomePageModule {};