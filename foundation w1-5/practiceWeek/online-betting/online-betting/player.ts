"use strict";
import { Bet } from "./bet";

export class Player {
  name: string;
  account: number;
  bets: Bet[] = [];

  constructor(name: string, account: number) {
    this.name = name;
    this.account = account;
  }

  makeBet(contestant, amount): void {
    if (this.account > amount) {
      let newBet = new Bet(amount, this.name, contestant);
      this.bets.push(newBet);
      this.account -= amount;
    }
  }
}
