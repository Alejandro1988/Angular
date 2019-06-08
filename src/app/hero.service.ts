import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './heroesMock';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
