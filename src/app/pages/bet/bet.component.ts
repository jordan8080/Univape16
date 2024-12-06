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

  selectedLeague: string = '';

  selectedCote: { [key: number]: string } = {};
  selectedBets: { [key: number]: number } = {};

  showBetValidation = false;
  betAmount: number = 0;

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.betService.getBet().subscribe((data) => {
      this.betOptions = data;
      console.log(data);
    });
    this.betService.getBet().subscribe((data) => {
      this.betOptions = data;
      this.originalBetOptions = data;
      console.log(data);
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

  // Calculate the potential winnings based on the bet amount and the total odds
  calculatePotentialWinnings(): number {
    const totalCote = this.calculateTotalCote();
    return Math.ceil((totalCote * this.betAmount)*100) /100;
  }

  submitBet() {
    if (this.betAmount > 0) {
      console.log('Pari confirmé ! Montant:', this.betAmount, 'Cote totale:', this.calculateTotalCote());
      // Add logic to save the bet or send it to the backend here
      this.showBetValidation = false; // Hide the validation form after submission
    } else {
      alert("Veuillez entrer un montant valide.");
    }
  }

  originalBetOptions: Bet[] = [];

  getUniqueLeagues(): string[] {
    const leagues = this.originalBetOptions.map((bet) => bet.competition);
    return Array.from(new Set(leagues));
  }

  filterByLeague(): void {
    if (this.selectedLeague) {
      this.betOptions = this.originalBetOptions.filter(
        (bet) => bet.competition === this.selectedLeague
      );
    } else {
      this.betOptions = [...this.originalBetOptions];
    }
  }



}
