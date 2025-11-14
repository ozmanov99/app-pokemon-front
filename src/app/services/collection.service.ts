import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private collection: Pokemon[] = [];

  // Récupérer toutes les cartes de la collection
  getCollection(): Pokemon[] {
    return this.collection;
  }

  // Ajouter des cartes à la collection
  ajouterCartes(cartes: Pokemon[]) {
    this.collection.push(...cartes);
  }

  supprimerCarte(id: number): void {
    this.collection = this.collection.filter((p) => p.id !== id);
  }
}
