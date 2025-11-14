import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Booster } from '../models/booster.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'http://localhost:8080/api/pokemons';
  private boosterUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiUrl);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Ouvrir un booster et récupérer uniquement les Pokémon
  openBooster(dresseurId: number): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.boosterUrl}/ouvrir/${dresseurId}`, {})
      .pipe(
        map((booster: Booster) => booster.cartes)
      );
  }
}
