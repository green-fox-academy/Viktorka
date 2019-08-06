'use strict'

import Ship from './shipt'
import Pirate from "./pirate"
import test from "tape"

test(t => {
    let jack: Pirate = new Pirate("Jack");
    let jack2: Pirate = new Pirate("Jack", true, true);
    t.equals(jack.gold, 10);
    t.equals(jack2.work(), 10);
    jack2.work();
    jack.work();
    t.equals(jack2.gold, 20);
    t.equals(jack.gold, 20);
    t.end();
})

test(t => {
    let jack2: Pirate = new Pirate("Jack2", true, true);
    let jack3: Pirate = new Pirate("Jack3", true, true);
    let ship: Ship = new Ship();
    ship.addPirate(jack2);
    ship.addPirate(jack3);
    t.equals(ship.pirates.length, 1);
    t.equals(ship.pirates[0].name, "Jack2");
    t.end();
})
