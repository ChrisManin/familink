import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string = 'Vous êtes déconnecté. (Chris/Tof)';
  name: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  // Informe l'utilisateur sur son authentification.
  setMessage() {
    this.message = this.authService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  // Connecte l'utilisateur auprès du Guard
  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Récupère l'URL de redirection depuis le service d'authentification
        // Si aucune redirection n'a été définie, redirige l'utilisateur vers la page d'authentification.
        const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/login';
        // Redirige l'utilisateur
        this.router.navigate([redirect]);
      } else {
        this.password = '';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
