import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from '../../services/auth.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  @ViewChild('lightEau') lightEau!: ElementRef;
  @ViewChild('lightFeu') lightFeu!: ElementRef;
  @ViewChild('lightElec') lightElec!: ElementRef;
  @ViewChild('lightPlante') lightPlante!: ElementRef;
  @ViewChild('lightVol') lightVol!: ElementRef;

  constructor(
    private pokemonService: PokemonService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getMyPokemons().subscribe({
      next: pokemons => this.pokemons = pokemons,
      error: err => console.error('Erreur chargement Pokémon', err)
    });
  }

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

    // Animation lumière du booster
    light.nativeElement.querySelector('.booster-light').style.opacity = '1';
    setTimeout(() =>
      light.nativeElement.querySelector('.booster-light').style.opacity = '0',
      300
    );

    // Ouvrir booster et ajouter les Pokémon
    this.pokemonService.openBoosterByType(type).subscribe({
      next: nouveaux => this.pokemons.push(...nouveaux),
      error: err => console.error('Erreur ouverture booster', err)
    });
  }

  logout(): void {
    this.authService.logout();                // supprime le token
    localStorage.removeItem('dresseurId');    // supprime l'ID
    this.router.navigate(['/login']);         // redirige vers login
  }
}
