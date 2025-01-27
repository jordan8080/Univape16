import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <h2>Inscription</h2>
    <form (submit)="register()">
      <label for="username">Nom d'utilisateur:</label>
      <input type="text" id="username" [(ngModel)]="username" name="username" required><br><br>

      <label for="password">Mot de passe:</label>
      <input type="password" id="password" [(ngModel)]="password" name="password" required><br><br>

      <button type="submit">S'inscrire</button>
    </form>
  `
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password).subscribe((response: any) => {
      console.log('Utilisateur inscrit', response);
    });
  }
}
