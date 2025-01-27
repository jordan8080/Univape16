import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetComponent } from './pages/bet/bet.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Ajouter ReactiveFormsModule pour le formulaire réactif
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

// Import des composants Register et Login
import { LoginComponent } from './pages/login.component';
import { RegisterComponent } from './pages/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BetComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    RegisterComponent,
    // Importer ReactiveFormsModule pour la gestion des formulaires réactifs
  ],
  providers: [provideAnimations(), // required animations providers
    provideToastr()],             // Fournisseur pour Toastr
  bootstrap: [AppComponent]
})
export class AppModule { }
