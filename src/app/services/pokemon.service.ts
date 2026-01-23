import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Booster } from '../models/booster.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonUrl = 'http://localhost:8080/api/pokemons';
  private boosterUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {}

  // Récupérer les Pokémon du dresseur connecté
  getMyPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }

  // Ouvrir un booster
  openBooster(): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir`, {})
      .pipe(map(b => b.cartes));
  }

  // Ouvrir un booster par type
  openBoosterByType(type: string): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir/type/${type}`, {})
      .pipe(map(b => b.cartes));
  }

  // Supprimer un Pokémon
  deletePokemon(id: number): Observable<void> {
    return this.http.delete<void>(`${this.pokemonUrl}/${id}`);
  }

}
