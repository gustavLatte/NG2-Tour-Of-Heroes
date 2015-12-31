import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroComponent} from './hero.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {APP_ROUTES} from './route.config';

@Component({
    selector: 'my-app',
    providers: [HeroService],
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['app/app.component.css'],
    template: `
                <h1>{{title}}</h1>
                <a [routerLink]="['Dashboard']">Dashboard</a>
                <a [routerLink]="['Heroes']">Heroes</a>              
                <router-outlet></router-outlet>
                `
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
    public title = 'Tour of Heroes';
}