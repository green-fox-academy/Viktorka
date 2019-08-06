"use strict";

export class Bet {
  betID: number = Math.floor(Math.random() * 9000) + 1000;
  amount: number;
  player: string;
  contestant: string;

  constructor(amount: number, player: string, contestant: string) {
    this.amount = amount;
    this.player = player;
    this.contestant = contestant;
  }
}
