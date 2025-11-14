import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Echange } from '../models/echange.model';

@Injectable({
  providedIn: 'root'
})
export class EchangeService {
  private apiUrl = 'http://localhost:8080/api/echanges';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Echange[]> {
    return this.http.get<Echange[]>(this.apiUrl);
  }

  get(id: number): Observable<Echange> {
    return this.http.get<Echange>(`${this.apiUrl}/${id}`);
  }

  proposer(echange: Echange): Observable<Echange> {
    return this.http.post<Echange>(this.apiUrl, echange);
  }

  accepter(id: number, dresseurId: number): Observable<Echange> {
    return this.http.put<Echange>(`${this.apiUrl}/${id}/accepter`, JSON.stringify(dresseurId), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  refuser(id: number): Observable<Echange> {
    return this.http.put<Echange>(`${this.apiUrl}/${id}/refuser`, {});
  }
}
