import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-ma-collection',
  templateUrl: './ma-collection.component.html',
  styleUrls: ['./ma-collection.component.css'],
  standalone: false
})
export class MaCollectionComponent implements OnInit {
  allPokemons: Pokemon[] = [];
  pokemons: Pokemon[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

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
        this.allPokemons = res.content;
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
        const indexAll = this.allPokemons.findIndex(p => p.id === id);
        if (indexAll > -1) this.allPokemons.splice(indexAll, 1);
        this.totalPages = Math.ceil(this.allPokemons.length / this.pageSize);
        if ((this.currentPage - 1) * this.pageSize >= this.allPokemons.length && this.currentPage > 1) {
          this.currentPage--;
        }
        this.updatePage();
      },
      error: err => console.error('Erreur suppression Pokémon', err)
    });
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('dresseurId');
    this.router.navigate(['/login']);
  }
}
