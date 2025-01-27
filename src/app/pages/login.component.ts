import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';  // Service d'authentification
import { ToastrService } from 'ngx-toastr';  // Pour afficher des messages de confirmation

@Component({
  selector: 'app-login',
  templateUrl: 'login/login.html',
  standalone: true,
  styleUrls: ['login/login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,  // Service pour la gestion des connexions
    private router: Router,
    private toastr: ToastrService  // Service de notifications
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.toastr.error('Veuillez remplir tous les champs.', 'Erreur');
      return;
    }

    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.toastr.success('Connexion réussie !', 'Bienvenue');
        this.router.navigate(['/bet']);  // Redirige vers la page des paris après connexion réussie
      },
      error: (err) => {
        this.toastr.error('Nom d\'utilisateur ou mot de passe incorrect.', 'Erreur de connexion');
      }
    });
  }
}
