import { Pokemon } from './pokemon.model';
import { Booster } from './booster.model';

export class Dresseur {
  id: number;
  nom: string;
  pseudo: string;
  photoUrl: string;
  niveau: number;
  role: string;         // 'dresseur' ou 'admin'
  username?: string;
  password?: string;
  pokemons?: Pokemon[];
  boosters?: Booster[];

  constructor(
    id: number,
    nom: string,
    pseudo: string,
    photoUrl: string,
    niveau: number,
    role: string,
    username?: string,
    password?: string,
    pokemons?: Pokemon[],
    boosters?: Booster[]
  ) {
    this.id = id;
    this.nom = nom;
    this.pseudo = pseudo;
    this.photoUrl = photoUrl;
    this.niveau = niveau;
    this.role = role;
    this.username = username;
    this.password = password;
    this.pokemons = pokemons;
    this.boosters = boosters;
  }
}
