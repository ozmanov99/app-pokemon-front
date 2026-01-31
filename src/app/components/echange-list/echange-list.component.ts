import { Component, OnInit } from '@angular/core';
import { EchangeService } from '../../services/echange.service';
import { DresseurService } from '../../services/dresseur.service';
import { Echange } from '../../models/echange.model';
import { Dresseur } from '../../models/dresseur.model';

@Component({
  selector: 'app-echange-list',
  templateUrl: './echange-list.component.html',
  styleUrls: ['./echange-list.component.css'],
  standalone: false
})
export class EchangeListComponent implements OnInit {
  echanges: Echange[] = [];
  dresseurConnecte!: Dresseur;

  constructor(
    private echangeService: EchangeService,
    private dresseurService: DresseurService
  ) {}

  ngOnInit(): void {
    // On récupère le profil du dresseur connecté
    this.dresseurService.getMyProfile().subscribe({
      next: dresseur => {
        this.dresseurConnecte = dresseur;
        this.loadEchanges();
      },
      error: err => console.error('Erreur chargement profil', err)
    });
  }

  loadEchanges(): void {
    this.echangeService.getAll().subscribe({
      next: data => {
        // On peut filtrer pour ne montrer que les échanges impliquant le dresseur connecté
        this.echanges = data.filter(e =>
          e.dresseur1.id === this.dresseurConnecte.id || e.dresseur2.id === this.dresseurConnecte.id
        );
      },
      error: err => console.error('Erreur chargement échanges', err)
    });
  }

  accepter(id: number): void {
    this.echangeService.accepter(id, this.dresseurConnecte.id).subscribe({
      next: () => this.loadEchanges(),
      error: err => console.error('Erreur acceptation échange', err)
    });
  }

  refuser(id: number): void {
    this.echangeService.refuser(id).subscribe({
      next: () => this.loadEchanges(),
      error: err => console.error('Erreur refus échange', err)
    });
  }
}
