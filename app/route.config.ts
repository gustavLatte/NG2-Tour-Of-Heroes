import {HeroComponent} from './hero.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

export var APP_ROUTES: any[] = [
    {path: '/', redirectTo: ['Dashboard'] },
    {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/heroes', name: 'Heroes', component: HeroComponent},
    {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
];