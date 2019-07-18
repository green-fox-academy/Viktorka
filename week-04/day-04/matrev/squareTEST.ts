'use strict'



import square from './square';
import test from 'tape';

// let test = require('tape')

test(t => {
    t.equals(square(3), 9);
    t.equals(square(1), 1);
    t.equals(square(5), 25);
    t.end()
})