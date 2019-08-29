'use strict'

import { test } from 'tape';
import { books, basketCalculator } from './potter'

// test('book price for 1', t => {
//     let numOfBooks: number = 2;

//     let actual: number = basketCalculator(numOfBooks);
//     let expected: number = 14.4;

//     t.equal(actual, expected);
//     t.end()
// })

test('book price for 2', t => {
    let basketOfBooks = {
        'first': 2,
        'second': 2,
        // 'third': 0,
        // 'fourth': 1,
        // 'fifth': 0
    };

    let actual: number = basketCalculator(basketOfBooks);
    let expected: number = 32 * 0.95;

    t.equal(actual, expected);
    t.end()



})