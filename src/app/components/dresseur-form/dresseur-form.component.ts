import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DresseurService } from '../../services/dresseur.service';
import { Dresseur } from '../../models/dresseur.model';

@Component({
  selector: 'app-dresseur-form',
  standalone: false,
  templateUrl: './dresseur-form.component.html',
  styleUrls: ['./dresseur-form.component.css']
})
export class DresseurFormComponent implements OnInit {
  dresseur: Dresseur = {
    id: 0,
    nom: '',
    pseudo: '',
    avatar: '',
    niveau: 1,
    role: 'dresseur'
  };

  constructor(
    private dresseurService: DresseurService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.dresseurService.get(id).subscribe(d => this.dresseur = d);
    }
  }

  save(): void {
    if (this.dresseur.id === 0) {
      this.dresseurService.create(this.dresseur).subscribe({
        next: d => console.log('Dresseur créé', d),
        error: err => console.error('Erreur création dresseur', err)
      });
    } else {
      this.dresseurService.update(this.dresseur.id, this.dresseur).subscribe({
        next: d => console.log('Dresseur mis à jour', d),
        error: err => console.error('Erreur mise à jour dresseur', err)
      });
    }
  }
}
