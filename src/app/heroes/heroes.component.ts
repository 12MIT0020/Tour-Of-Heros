import { Component, OnInit } from '@angular/core';
//import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  //  hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  ngOnInit() {
  this.getHeroes();
}
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
heroes: Hero[];
  // ngOnInit() {
    
  // }

  selectedHero: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}

}
