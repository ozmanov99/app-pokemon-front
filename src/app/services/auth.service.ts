import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'jwt_token';

  constructor(private http: HttpClient) {
    }

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
    return !!this.getToken();
  }
}
