'use strict';

import {test} from 'tape';
import {anagramChecker} from './anagram';

test('are they anagrams?', t=> {
    let firstWord= 'alma';
    let secondWord= 'korte';

    let actual =anagramChecker(firstWord, secondWord);
    let expected = false;

    t.equal(actual,expected);
    t.end();
})

test('are they anagrams?2', t=> {
    let firstWord= 'david';
    let secondWord= 'divad';

    let actual =anagramChecker(firstWord, secondWord);
    let expected = true;

    t.equal(actual,expected);
    t.end();
})

test('are they anagrams?3', t=> {
    let firstWord= 'elvis';
    let secondWord= 'lives';

    let actual =anagramChecker(firstWord, secondWord);
    let expected = true;

    t.equal(actual,expected);
    t.end();
})
test('are they anagrams?4', t=> {
    let firstWord= 'tommarvoloriddle';
    let secondWord= 'iamlordvoldemort';

    let actual =anagramChecker(firstWord, secondWord);
    let expected = true;

    t.equal(actual,expected);
    t.end();
})


