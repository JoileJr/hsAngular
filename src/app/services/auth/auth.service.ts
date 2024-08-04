import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponseDTO } from 'src/app/models/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/login/';

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponseDTO> {
    return this.http.post<AuthResponseDTO>(`${this.apiUrl}`, { username, password })
      .pipe(
        tap(response => this.setSession(response)),
      );
  }

  private setSession(authResult: AuthResponseDTO) {
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('token', authResult.access);
    }
  }

  isLoggedIn(): boolean {
    if (this.isLocalStorageAvailable()) {
      return !!localStorage.getItem('token');
    }
    return false;
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('token');
  }
}
