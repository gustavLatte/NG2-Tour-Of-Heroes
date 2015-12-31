import {Component, OnInit} from 'angular2/core';
//import {Router} from 'angular2/Router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'heroes-dashboard',
    styleUrls: ['app/dashboard.component.css'],
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    
    public heroes: Hero[];
    
    constructor(private _heroService: HeroService) {}
    
    ngOnInit(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
    
    gotoDetail(hero: Hero){
        //this._router.navigate(['HeroDetail', {id: hero.id}]);
    }
}