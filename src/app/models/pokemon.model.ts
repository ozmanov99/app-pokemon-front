import { Dresseur } from './dresseur.model';

export class Pokemon {
  id: number;
  nom: string;
  type: string;
  niveau: number;
  attaque: number;
  defense: number;
  rarete: string;
  dresseur?: Dresseur;
  imageUrl?: string;

  constructor(
    id: number,
    nom: string,
    type: string,
    niveau: number,
    attaque: number,
    defense: number,
    rarete: string,
    dresseur?: Dresseur,
    imageUrl?: string
  ) {
    this.id = id;
    this.nom = nom;
    this.type = type;
    this.niveau = niveau;
    this.attaque = attaque;
    this.defense = defense;
    this.rarete = rarete;
    this.dresseur = dresseur;
    this.imageUrl = imageUrl;
  }
}
