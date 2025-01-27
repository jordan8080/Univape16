import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetComponent } from './pages/bet/bet.component';
import { RegisterComponent } from './pages/register.component'  // Ajout du composant d'inscription
import { LoginComponent } from './pages/login.component';          // Ajout du composant de connexion
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: 'bet', component: BetComponent },
  { path: 'register', component: RegisterComponent },  // Route pour l'inscription
  { path: 'login', component: LoginComponent },        // Route pour la connexion
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Route par défaut redirige vers la page de connexion
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ToastrModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
