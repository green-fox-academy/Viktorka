'use strict';

import {test} from 'tape';
import { numberToStringConverter } from './number_converter';
import { stringToNumber} from './number_converter'

test('number to string', t=> {
    let numberToString= 1;

    let actual = numberToStringConverter(numberToString);
    let expected = 'one dollar';

    t.equal(actual,expected);
    t.end();
})

test('number to string2', t=> {
    let numberToString= 2;

    let actual = numberToStringConverter(numberToString);
    let expected = 'two dollars';

    t.equal(actual,expected);
    t.end();
})

test('number to string3', t=> {
    let numberToString= 20;

    let actual = numberToStringConverter(numberToString);
    let expected = 'twenty dollars';

    t.equal(actual,expected);
    t.end();
})

test('number to string4', t=> {
    let numberToString= 200;

    let actual = numberToStringConverter(numberToString);
    let expected = 'two hundred dollars';

    t.equal(actual,expected);
    t.end();
})

test('number to string5', t=> {
    let numberToString= 23;

    let actual = numberToStringConverter(numberToString);
    let expected = 'twenty three dollars';

    t.equal(actual,expected);
    t.end();
})
test('number to string6', t=> {
    let numberToString= 523;

    let actual = numberToStringConverter(numberToString);
    let expected = 'five hundred and twenty three dollars';

    t.equal(actual,expected);
    t.end();
})

test('string to number1', t=> {
    let numberToString: number = 3;

    let actual = stringToNumber(numberToStringConverter(numberToString));
    let expected = 3;

    t.equal(actual,expected);
    t.end();
})

test('string to number2', t=> {
    let numberToString: number = 30;

    let actual = stringToNumber(numberToStringConverter(numberToString));
    let expected = 30;

    t.equal(actual,expected);
    t.end();
})
test('string to number3', t=> {
    let numberToString: number = 32;

    let actual = stringToNumber(numberToStringConverter(numberToString));
    let expected = 32;

    t.equal(actual,expected);
    t.end();
})
test('string to number4', t=> {
    let numberToString: number = 300;

    let actual = stringToNumber(numberToStringConverter(numberToString));
    let expected = 300;

    t.equal(actual,expected);
    t.end();
})
test('string to number5', t=> {
    let numberToString: number = 523;

    let actual = stringToNumber(numberToStringConverter(numberToString));
    let expected = 523;

    t.equal(actual,expected);
    t.end();
})