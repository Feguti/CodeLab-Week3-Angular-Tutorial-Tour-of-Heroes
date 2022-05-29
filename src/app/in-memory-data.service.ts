import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 12, name: ' Oliver Sykes'},
      {id: 13, name: ' Super Pedro'},
      {id: 14, name: ' Will Smith'},
      {id: 15, name: ' AnGeL oF tHe NiGhT'},
      {id: 16, name: ' Pingu'},
      {id: 17, name: ' Totodile de tênis'},
      {id: 18, name: ' Diluc'},
      {id: 19, name: ' Piui Tic Tac'},
      {id: 20, name: ' Sekiro'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
