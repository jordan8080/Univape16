import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BetComponent} from "./pages/bet/bet.component";

const routes: Routes = [{ path: 'bet', component: BetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
