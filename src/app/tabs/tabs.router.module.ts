import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {MessagePage} from '../message/message.page';
import {MomentPage} from '../moment/moment.page';
import {HomePage} from '../home/home.page';
import {ContactPage} from '../contact/contact.page';
import {PersonPage} from '../person/person.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'message',
                outlet: 'message',
                component: MessagePage
            },
            {
                path: 'moment',
                outlet: 'moment',
                component: MomentPage
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage
            },
            {
                path: 'contact',
                outlet: 'contact',
                component: ContactPage
            },
            {
                path: 'person',
                outlet: 'person',
                component: PersonPage
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
