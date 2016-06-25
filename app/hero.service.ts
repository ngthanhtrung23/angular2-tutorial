import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return new Promise<Hero[]>(
      resolve => setTimeout(() => resolve(HEROES), 20)
    );
    return Promise.resolve(HEROES);
  }
}
