import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';
import { Booster } from '../models/booster.model';

@Injectable({
  providedIn: 'root'
})
export class BoosterService {
  private apiUrl = 'http://localhost:8080/api/boosters';

  constructor(private http: HttpClient) {
    }

  // Ouvrir un booster par type (Eau, Feu, Électrik, etc.)
  ouvrirParType(dresseurId: number, type: string): Observable<Pokemon[]> {
    return this.http.post<Booster>(`${this.apiUrl}/ouvrir/${dresseurId}/${type}`, {
      })
      .pipe(map((booster: Booster) => booster.cartes));
  }

  getAll(): Observable<Booster[]> {
    return this.http.get<Booster[]>(this.apiUrl);
  }
}
