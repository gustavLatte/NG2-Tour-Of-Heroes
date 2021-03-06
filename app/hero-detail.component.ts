import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/Router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    inputs: ['hero'],
    styleUrls: ['app/hero-detail.component.css'],
    template: `
            <div *ngIf="hero">
                <h2>{{hero.name}} details!</h2>
                <div><label>id: </label>{{hero.id}}</div>
                <div>
                        <label>name: </label>
                        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            `
})

export class HeroDetailComponent{
    public hero: Hero;
    
    constructor(private _heroService: HeroService, private _routeParams: RouteParams) { }
    
    ngOnInit(){
        if (!this.hero){
            let id = +this._routeParams.get('id');
            this._heroService.getHero(id).then(hero => this.hero = hero);
        }
    }
    
    goBack(){
        window.history.back();
    }
}