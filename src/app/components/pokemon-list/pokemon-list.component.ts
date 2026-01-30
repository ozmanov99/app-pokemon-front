import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from '../../services/auth.service';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  standalone: false,

})
export class PokemonListComponent implements OnInit {
  allPokemons: Pokemon[] = [];   // tous les pokemons
  pokemons: Pokemon[] = [];      // pokemons affichés sur la page
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

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
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getMyPokemons().subscribe({
      next: res => {
        this.allPokemons = res.content; // <-- utilise bien "content"
        this.totalPages = Math.ceil(this.allPokemons.length / this.pageSize);
        this.updatePage();
      },
      error: err => console.error('Erreur chargement Pokémon', err)
    });
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pokemons = this.allPokemons.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  deletePokemon(id: number): void {
    this.pokemonService.deletePokemon(id).subscribe({
      next: () => {
        // Supprime le Pokémon du tableau complet
        const indexAll = this.allPokemons.findIndex(p => p.id === id);
        if (indexAll > -1) this.allPokemons.splice(indexAll, 1);

        // Met à jour le nombre total de pages
        this.totalPages = Math.ceil(this.allPokemons.length / this.pageSize);

        // Si la page actuelle est vide après suppression, retourne à la page précédente
        if ((this.currentPage - 1) * this.pageSize >= this.allPokemons.length && this.currentPage > 1) {
          this.currentPage--;
        }

        // Met à jour l'affichage
        this.updatePage();
      },
      error: err => console.error('Erreur suppression Pokémon', err)
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
      next: nouveaux => {
        this.allPokemons.push(...nouveaux);
        this.totalPages = Math.ceil(this.allPokemons.length / this.pageSize);
        this.updatePage();
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
