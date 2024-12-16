import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetComponent } from './pages/bet/bet.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

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
    FormsModule
  ],
  providers: [provideAnimations(), // required animations providers
    provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
