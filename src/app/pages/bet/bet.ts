// @ts-ignore

export class Bet {
  id: number;
  name: string;
  cote1: number;
  cote2: number;
  cote3: number;
  competition: string
  [key: string]: number | string;



  constructor(id: number, name: string, cote1: number, cote2: number, cote3: number, competition: string) {
    this.id = id;
    this.name = name;
    this.cote1 = cote1;
    this.cote2 = cote2;
    this.cote3 = cote3;
    this.competition = competition;
  }
}
