import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dresseur } from '../models/dresseur.model';

@Injectable({
  providedIn: 'root'
})
export class DresseurService {
  private apiUrl = 'http://localhost:8080/api/dresseurs';

  constructor(private http: HttpClient) {
    }

  getAll(): Observable<Dresseur[]> {
    return this.http.get<Dresseur[]>(this.apiUrl);
  }

  get(id: number): Observable<Dresseur> {
    return this.http.get<Dresseur>(`${this.apiUrl}/${id}`);
  }

  create(dresseur: Dresseur): Observable<Dresseur> {
    return this.http.post<Dresseur>(this.apiUrl, dresseur);
  }

  update(id: number, dresseur: Dresseur): Observable<Dresseur> {
    return this.http.put<Dresseur>(`${this.apiUrl}/${id}`, dresseur);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
