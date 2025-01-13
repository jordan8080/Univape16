export class Userbet {
  id_bet: number;
  id_user: number;
  cote: number;
  mise: number;
  gain_potentiel: number;
  is_won: boolean;

  constructor(
    id_bet: number,
    id_user: number,
    cote: number,
    mise: number,
    gain_potentiel: number,
    is_won: boolean
  ) {
    this.id_bet = id_bet;
    this.id_user = id_user;
    this.cote = cote;
    this.mise = mise;
    this.gain_potentiel = gain_potentiel;
    this.is_won = is_won;
  }
}
