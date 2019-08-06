"use strict";

export class Contestant {
  name: string;
  placement: number;

  constructor(name: string, placement: number = 0) {
    this.name = name;
    this.placement = placement;
  }

  setPlacement(value: number): void {
    this.placement = value;
  }

  toString(): string {
    let output: string = `${this.name} has finished on place: ${this.placement}`;
    return output;
  }
}
