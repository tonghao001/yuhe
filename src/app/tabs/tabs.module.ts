import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TabsPageRoutingModule} from './tabs.router.module';

import {TabsPage} from './tabs.page';
import {MessagePageModule} from '../message/message.module';
import {MomentPageModule} from '../moment/moment.module';
import {HomePageModule} from '../home/home.module';
import {ContactPageModule} from '../contact/contact.module';
import {PersonPageModule} from '../person/person.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        TabsPageRoutingModule,
        MessagePageModule,
        MomentPageModule,
        HomePageModule,
        ContactPageModule,
        PersonPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {
}
