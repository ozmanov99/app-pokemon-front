import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-ma-collection',
  templateUrl: './ma-collection.component.html',
  styleUrls: ['./ma-collection.component.css'],
  standalone: false
})
export class MaCollectionComponent implements OnInit {
  maCollection: Pokemon[] = [];

  constructor(private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.maCollection = this.collectionService.getCollection();
  }

  supprimer(id: number): void {
    this.collectionService.supprimerCarte(id);
    this.maCollection = this.collectionService.getCollection();
  }
}
