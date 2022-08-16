import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl:'./login.component.html'
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (user/user)';
  auth: AuthService;
  name: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }
 ngOnInit(): void {
   this.auth = this.authService;
 }
  setMessage() {
    this.message = this.authService.isLoggedIn ?
      'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemons';
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