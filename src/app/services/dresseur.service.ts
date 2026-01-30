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

  getMyProfile(): Observable<Dresseur> {
    return this.http.get<Dresseur>(`${this.apiUrl}/me`);
  }
}
