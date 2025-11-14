import { Component, OnInit } from '@angular/core';
import { EchangeService } from '../../services/echange.service';
import { Echange } from '../../models/echange.model';

@Component({
  selector: 'app-echange-list',
  templateUrl: './echange-list.component.html',
  styleUrls: ['./echange-list.component.css'],
  standalone: false
})
export class EchangeListComponent implements OnInit {
  echanges: Echange[] = [];

  constructor(private echangeService: EchangeService) {}

  ngOnInit(): void {
    this.loadEchanges();
  }

  loadEchanges(): void {
    this.echangeService.getAll().subscribe({
      next: (data) => this.echanges = data,
      error: (err) => console.error('Erreur chargement échanges', err)
    });
  }

  accepter(id: number): void {
    const dresseurId = 1; // TODO : récupérer l'ID du dresseur courant
    this.echangeService.accepter(id, dresseurId).subscribe({
      next: () => this.loadEchanges(),
      error: (err) => console.error('Erreur acceptation échange', err)
    });
  }

  refuser(id: number): void {
    this.echangeService.refuser(id).subscribe({
      next: () => this.loadEchanges(),
      error: (err) => console.error('Erreur refus échange', err)
    });
  }
}
