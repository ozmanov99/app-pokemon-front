import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BoosterService } from '../../services/booster.service';
import { CollectionService } from '../../services/collection.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  dresseurId = 3;

  @ViewChild('lightEau') lightEau!: ElementRef;
  @ViewChild('lightFeu') lightFeu!: ElementRef;
  @ViewChild('lightElec') lightElec!: ElementRef;
  @ViewChild('lightPlante') lightPlante!: ElementRef;
  @ViewChild('lightVol') lightVol!: ElementRef;

  constructor(
    private boosterService: BoosterService,
    private collectionService: CollectionService
  ) {}

  ngOnInit(): void {}

  ouvrirBooster(type: string): void {
    let light: ElementRef;
    switch(type) {
      case 'Eau': light = this.lightEau; break;
      case 'Feu': light = this.lightFeu; break;
      case 'Électrik': light = this.lightElec; break;
      case 'Plante': light = this.lightPlante; break;
      case 'Vol': light = this.lightVol; break;
      default: return;
    }

    light.nativeElement.querySelector('.booster-light').style.opacity = '1';
    setTimeout(() => light.nativeElement.querySelector('.booster-light').style.opacity = '0', 300);

    this.boosterService.ouvrirParType(this.dresseurId, type).subscribe({
      next: (nouveauxPokemons: Pokemon[]) => {
        this.pokemons = [];
        nouveauxPokemons.forEach((p, index) => {
          setTimeout(() => {
            this.pokemons.push(p);
            this.collectionService.ajouterCartes([p]);
          }, index * 400);
        });
      },
      error: (err) => console.error('Erreur ouverture booster', err)
    });
  }
}
