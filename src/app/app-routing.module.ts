import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BetComponent} from "./pages/bet/bet.component";
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [{ path: 'bet', component: BetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), ToastrModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
