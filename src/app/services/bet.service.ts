import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bet} from "../pages/bet/bet";

@Injectable({
  providedIn: 'root'
})
export class BetService {

  constructor(private http:HttpClient) { }

  getBet():Observable<Bet[]> {
    return this.http.get<Bet[]>("http://localhost:8080/api/bet");
  }

  //creer service pour save cote, mise, gain potentiel / save un object identique a celui récupéré cote backend au niveau controller
}
