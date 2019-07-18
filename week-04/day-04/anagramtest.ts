'use strict';

import anagramChecker from './anagram'
import test from 'tape'

test(t => {
t.equals(anagramChecker("alom","mola"),true)
t.notEquals(anagramChecker("blom","mola"),true)
t.end()


})