import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
  redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

  // Connexion
  login(name: string, password: string): Observable<boolean> {
    let isLoggedIn = (name === 'Chris' && password === 'Tof');

    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = isLoggedIn)
    );
  }

  // Deconnexion
  logout(): void {
    this.isLoggedIn = false;
  }
}
