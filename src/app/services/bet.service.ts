import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../pages/bet/bet';

@Injectable({
  providedIn: 'root'
})
export class BetService {

  private apiUrl = 'http://localhost:8080/api/bet';

  constructor(private http: HttpClient) {}

  getBet(): Observable<Bet[]> {
    return this.http.get<Bet[]>(this.apiUrl);
  }

  saveBet(betDetails: {
    selectedBets: { [key: number]: number };
    betAmount: number;
    potentialWinnings: number;
    isWon: boolean;
    idUser: number;
  }): Observable<any> {
    const payload = {
      selectedBets: betDetails.selectedBets,
      betAmount: betDetails.betAmount,
      potentialWinnings: betDetails.potentialWinnings,
      isWon: false,
      idUser: 14,
    };


    return this.http.post<any>(`http://localhost:8080/api/userbets`, {
      payload
    });
  }
}
