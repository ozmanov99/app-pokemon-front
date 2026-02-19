import { Component, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';
import { MascotService } from '../../services/mascot.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false
})
export class PokemonListComponent {
  allPokemons: Pokemon[] = [];
  nouveauxPokemons: Pokemon[] = [];

  @ViewChild('lightEau') lightEau!: ElementRef;
  @ViewChild('lightFeu') lightFeu!: ElementRef;
  @ViewChild('lightElec') lightElec!: ElementRef;
  @ViewChild('lightPlante') lightPlante!: ElementRef;
  @ViewChild('lightVol') lightVol!: ElementRef;

  constructor(
    private pokemonService: PokemonService,
    public authService: AuthService,
    private router: Router,
    private mascotService: MascotService
  ) {}

  ouvrirBooster(type: string): void {
    let light!: ElementRef;
    switch (type) {
      case 'Eau': light = this.lightEau; break;
      case 'Feu': light = this.lightFeu; break;
      case 'Électrik': light = this.lightElec; break;
      case 'Plante': light = this.lightPlante; break;
      case 'Vol': light = this.lightVol; break;
      default: return;
    }

    // Lumière du booster
    light.nativeElement.querySelector('.booster-light').style.opacity = '1';
    setTimeout(() => light.nativeElement.querySelector('.booster-light').style.opacity = '0', 300);

    // Déclenche le saut de la mascotte avec type de booster
    this.mascotService.triggerJump(type);

    // Ouvrir booster et afficher Pokémon
    this.pokemonService.openBoosterByType(type).subscribe({
      next: nouveaux => {
        this.nouveauxPokemons = nouveaux;
        setTimeout(() => this.nouveauxPokemons = [], 5000);
      },
      error: err => console.error('Erreur ouverture booster', err)
    });
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('dresseurId');
    this.router.navigate(['/login']);
  }
}
