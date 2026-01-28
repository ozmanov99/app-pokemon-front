import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    return this.http
      .post(`${this.apiUrl}/login`, null, {
        params: { username, password },
        responseType: 'text'
      })
      .pipe(
        tap(token => localStorage.setItem(this.tokenKey, token))
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      // Décoder le payload du JWT
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp; // exp en secondes
      const now = Math.floor(Date.now() / 1000);
      return exp > now;
    } catch (e) {
      // Si le token est invalide
      return false;
    }
  }
}
