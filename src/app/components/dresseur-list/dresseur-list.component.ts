import { Component, OnInit } from '@angular/core';
import { DresseurService } from '../../services/dresseur.service';
import { Dresseur } from '../../models/dresseur.model';

@Component({
  selector: 'app-dresseur-list',
  standalone: false,
  templateUrl: './dresseur-list.component.html',
  styleUrls: ['./dresseur-list.component.css']
})
export class DresseurListComponent implements OnInit {
  dresseurs: Dresseur[] = [];

  constructor(private dresseurService: DresseurService) {}

  ngOnInit(): void {
    this.loadDresseurs();
  }

  loadDresseurs(): void {
    this.dresseurService.getAll().subscribe({
      next: (data) => (this.dresseurs = data),
      error: (err) => console.error('Erreur chargement dresseurs', err),
    });
  }

  supprimer(id: number): void {
    this.dresseurService.delete(id).subscribe(() => this.loadDresseurs());
  }
}
