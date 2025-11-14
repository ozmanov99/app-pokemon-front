import { Dresseur } from './dresseur.model';
import { Pokemon } from './pokemon.model';

export class Echange {
  id: number;
  date: string;
  statut: string;
  dresseur1: Dresseur;
  dresseur2: Dresseur;
  cartesDresseur1: Pokemon[];
  cartesDresseur2: Pokemon[];

  constructor(
    id: number,
    date: string,
    statut: string,
    dresseur1: Dresseur,
    dresseur2: Dresseur,
    cartesDresseur1: Pokemon[],
    cartesDresseur2: Pokemon[]
  ) {
    this.id = id;
    this.date = date;
    this.statut = statut;
    this.dresseur1 = dresseur1;
    this.dresseur2 = dresseur2;
    this.cartesDresseur1 = cartesDresseur1;
    this.cartesDresseur2 = cartesDresseur2;
  }
}
