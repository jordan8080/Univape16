// bet.component.ts
import { Component, OnInit } from '@angular/core';
import { BetService } from "../../services/bet.service";
import { Bet } from "./bet";

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {
  title = "Bienvenue dans la partie de pari sportif d'Univape";
  description = 'Choisissez votre pari et maximisez vos gains !';

  betOptions: Bet[] = [];

  selectedCote: { [key: number]: string } = {};
  selectedBets: { [key: number]: number } = {};

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.betService.getData().subscribe((data) => {
      /*this.betOptions = data;*/
      console.log(this.betOptions);
    });
  }

  toggleCoteSelection(betId: number, coteKey: string, coteValue: number) {
    if (this.selectedCote[betId] === coteKey) {
      this.selectedCote[betId] = '';
      delete this.selectedBets[betId];
    } else {
      this.selectedCote[betId] = coteKey;
      this.selectedBets[betId] = coteValue;
    }
  }

  calculateTotalCote(): number {
    const total = Object.values(this.selectedBets).reduce((total, cote) => total * cote, 1);
    return Math.ceil(total * 100) / 100;
  }
}
