'use strict';

import Sumable from './sum'
import test from 'tape'

test(t => {
    let emptyArray: Sumable = new Sumable();
    let oneElementArray: Sumable = new Sumable([5]);
    let twoElementArray: Sumable = new Sumable([3,4]);
    t.equals(emptyArray.sum(),undefined);
    t.equals(oneElementArray.sum(),5);
    t.equals(twoElementArray.sum(),3+4);
    t.equals(twoElementArray.sum(),3+4+1);
    t.end()
})