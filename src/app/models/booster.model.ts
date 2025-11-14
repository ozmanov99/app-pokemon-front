import { Pokemon } from './pokemon.model';

export class Booster {
  id: number;
  dateOuverture: string;
  cartes: Pokemon[];

  constructor(id: number, dateOuverture: string, cartes: Pokemon[]) {
    this.id = id;
    this.dateOuverture = dateOuverture;
    this.cartes = cartes;
  }
}
