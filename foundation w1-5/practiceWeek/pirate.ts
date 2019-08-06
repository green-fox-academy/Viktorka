'use strict';

export default class Pirate {
    name: string;
    gold: number;
    health: number;
    isCaptain: boolean;
    isLegWooden: boolean;

    constructor(name: string, isCaptain?: boolean, isLegWooden?: boolean, gold: number = 10, health: number = 10) {
        this.name = name;
        this.gold = gold;
        this.health = health;
        this.isCaptain = isCaptain;
        this.isLegWooden = isLegWooden;
    }

    work(): void {
        if (this.isCaptain) {
            this.gold = this.gold + 10;
            this.health = this.health - 5;
        } else {
            this.gold++;
            this.health--;
        }
    };

    party(): void {
        if (this.isCaptain) {
            this.health = this.health + 10;
        } else {
            this.health++;
        };

    }
    toString(): string {
        if (this.isLegWooden) {
            return `Hi I'm ${this.name} and I have a wooden leg and ${this.gold}`
        } else {
            return `Hi I'm ${this.name} and I have my real legs and ${this.gold}`
        }
    }
}
