import { Component, OnInit } from '@angular/core';
import { BetService } from "../../services/bet.service";
import { Bet } from "./bet";
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';



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

  showBetValidation = true;
  betAmount: number = 0;

  constructor(private betService: BetService, private toastr: ToastrService) {}

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


async submitBet() {
  if (this.betAmount > 0) {
    const betDetails = {
      selectedBets: this.selectedBets,
      betAmount: this.betAmount,
      potentialWinnings: this.calculatePotentialWinnings(),
    };

    try {
      const response = await firstValueFrom(this.betService.saveBet(betDetails));
      console.log('Pari enregistré avec succès:', response);
      this.showBetValidation = false;
      this.toastr.success('Pari Validé', 'Bonne chance !');
    } catch (error) {
      this.toastr.error('Erreur lors de l\'enregistrement', 'ERREUR');
    }
  } else {
    this.toastr.error('Valeur invalide', 'ERREUR');
  }
}



originalBetOptions: Bet[] = [];

  getUniqueLeagues(): string[] {
    const leagues = this.originalBetOptions.map((bet) => bet.competition);
    return Array.from(new Set(leagues));
  }

  filterByLeague(): void {
    if (this.selectedLeague && this.selectedLeague !== 'Toutes les ligues') {
      this.betOptions = this.originalBetOptions.filter(
        (bet) => bet.competition === this.selectedLeague
      );
    } else {
      this.betOptions = [...this.originalBetOptions];
    }
  }

  getSelectedBets(): Bet[] {
    return this.betOptions.filter((bet) => this.selectedCote[bet.id]);
  }


}
