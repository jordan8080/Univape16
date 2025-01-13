import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../pages/bet/bet';
// @ts-ignore
import { Userbet } from '../pages/Userbet/userbet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private apiUrl = 'http://localhost:8080/api/bet';

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les paris disponibles
   */
  getBet(): Observable<Bet[]> {
    return this.http.get<Bet[]>(this.apiUrl);
  }

  /**
   * Sauvegarde un pari utilisateur
   * @param userbetDetails Détails du pari utilisateur
   * @returns Observable de la réponse
   */
  saveBet(userbetDetails: {
    id_bet: number;
    id_user: number;
    cote: number;
    mise: number;
    isWon: boolean;
  }): Observable<any> {
    const gainPotentiel = userbetDetails.cote * userbetDetails.mise;

    const userBet = new Userbet(
      userbetDetails.id_bet,
      15,
      userbetDetails.cote,
      userbetDetails.mise,
      gainPotentiel,
      userbetDetails.isWon
    );

    return this.http.post<any>(`http://localhost:8080/api/userbets`, userBet);
  }
}
