import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero?: Hero;
    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero():void {
        this.route.params.subscribe(routeParams => {
            const id = routeParams.id;
            console.log('Hero id:', id);
            this.heroService.getHero(id).subscribe(hero => this.hero = hero);
            //this.hero = this.heroService.getHero2(id);
            console.log('Hero info:', this.hero);
        });
    }

    goBack(): void {
        this.location.back();
    }
}
