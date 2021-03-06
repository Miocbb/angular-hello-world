import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService,
        private messageService: MessageService) { }

    getHeroes(): void {
        // using `subscribe()` to select elements asynchronously.
        this.heroService.getHeroes()
            .subscribe((heros_t) => this.heroes = heros_t);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

}
