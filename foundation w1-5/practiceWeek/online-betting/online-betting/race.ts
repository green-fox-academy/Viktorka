"use strict";

import { Player } from "./player";
import { Contestant } from "./contestant";

class Race {
  contestants: Contestant[];
  players: Player[];

  constructor(contestants: Contestant[], players: Player[]) {
    this.contestants = contestants;
    this.players = players;
  }

  startRace(): void {
    let positions: number[] = [];
    for (let i: number = 1; i <= this.contestants.length; i++) {
      positions.push(i);
    }
    for (let j: number = 0; j < this.contestants.length; j++) {
      let positionIndex: number = Math.floor(Math.random() * positions.length);
      this.contestants[j].setPlacement(positions[positionIndex]);
      positions.splice(positionIndex, 1);
    }
    let contestantsInOrder: Contestant[] = this.contestants.sort(function(a: Contestant, b: Contestant) {
      return a.placement - b.placement;
    });
    console.log(contestantsInOrder);
    for (let k: number = 0; k < this.players.length; k++) {
      for (let l: number = 0; l < this.players[k].bets.length; l++) {
        if (this.players[k].bets[l].contestant === contestantsInOrder[0].name) {
          this.players[k].bets[l].amount = this.players[k].bets[l].amount * 2;
          this.players[k].account += this.players[k].bets[l].amount * 2;
          console.log(`${this.players[k].name} has won ${this.players[k].bets[l].amount}$ with the bet: ${this.players[k].bets[l].betID}`);
        }
      }
    }
  }
}

let player1 = new Player("Mark", 100);
let player2 = new Player("Evi", 500);
let player3 = new Player("Barni", 200);
let contestant1 = new Contestant("Jani");
let contestant2 = new Contestant("Szabi");
let contestant3 = new Contestant("Pascal");

player1.makeBet("Szabi", 10);
player2.makeBet("Jani", 200);
player3.makeBet("Pascal", 20);

let playerArray: Player[] = [player1, player2, player3];
let contestantArray: Contestant[] = [contestant1, contestant2, contestant3];

let myRace = new Race(contestantArray, playerArray);

myRace.startRace();
