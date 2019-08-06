'use strict';

import test from "tape"
import { doubleUp } from './matrix1'

test(t => {
    let testerMatrix: number[][] = [
        [1, 3, 6, 2],
        [7, 5, 6, 1],
        [3, 3, 1, 5],
        [9, 0, 5, 3]
    ]
    let otherMatrix: number[][] = [
        [1, 3, 12, 4],
        [14, 10, 6, 2],
        [3, 3, 1, 5],
        [18, 0, 10, 6]
    ]
    let test2Matrix : number [][] = [
        [1,2],
    [1,2,3,4]
]
    let other2Matrix: number [][] = [[1,4],[2,2,6,4]]

    t.deepEqual(doubleUp(testerMatrix), otherMatrix);
    t.deepEqual(doubleUp(test2Matrix), other2Matrix);

    t.end()

})