import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Booster } from '../models/booster.model';

export interface PaginatedResponse {
  content: Pokemon[];
  totalPages: number;
  totalElements: number;
  page: number;
  size: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'http://localhost:8080/api/pokemons';
  private boosterUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {}

  // Pagination pour Pokémon du dresseur
  getMyPokemons(page: number = 0, size: number = 20): Observable<PaginatedResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<PaginatedResponse>(this.pokemonUrl, { params });
  }

  // Ouvrir un booster
  openBooster(): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir`, {})
      .pipe(map(b => b.cartes));
  }

  openBoosterByType(type: string): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir/type/${type}`, {})
      .pipe(map(b => b.cartes));
  }

  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pokemonUrl}/${id}`);
  }
}
