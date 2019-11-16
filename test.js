'use strict'

const lengthCounter = require('./what');
const test = require('tape');

test(t => {
  t.equals(lengthCounter('asdasd', 6), 6)
  t.end()
})