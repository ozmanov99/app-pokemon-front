import { Component, OnInit } from '@angular/core';
import { DresseurService } from '../../services/dresseur.service';
import { Dresseur } from '../../models/dresseur.model';

@Component({
  selector: 'app-dresseur-list',
  templateUrl: './dresseur-list.component.html',
  styleUrls: ['./dresseur-list.component.css'],
  standalone: false,
})
export class DresseurListComponent implements OnInit {

  dresseur!: Dresseur;

  constructor(private dresseurService: DresseurService) {}

  ngOnInit(): void {
    this.dresseurService.getMyProfile().subscribe({
      next: (data) => this.dresseur = data,
      error: (err) => console.error('Erreur chargement profil', err),
    });
  }
}
