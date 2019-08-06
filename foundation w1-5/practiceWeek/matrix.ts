
'use strict';
​
let matrix: number[][] = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 1],
]
​
function isMatrixsymmetric(): boolean {
    let outPut: boolean = true;
    for (let i: number = 0; i < matrix.length; i++) {
​
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                outPut = false;
            }
        }
    }
​
    return outPut;
}
​
console.log(isMatrixsymmetric());