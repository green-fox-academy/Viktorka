'use strict';

let mYmatrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotateClockwise(matrix: number[][]): number[][] {
    let rotatedMatrix: number[][] = [];
    for (let i: number = 0; i < matrix.length; i++) {
        let row: number[] = [];
        for (let j: number = matrix.length - 1; j >= 0; j--) {
            row.push(matrix[j][i]);
        }
        rotatedMatrix.push(row);~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
    return rotatedMatrix;
}
console.log(rotateClockwise(mYmatrix))
console.log(rotateCounterClockwise(mYmatrix));

function rotateCounterClockwise(matrix: number[][]): number[][] {
    let rotatedMatrix: number[][] = [];
    for (let i: number = matrix.length - 1; i >= 0; i--) {
        let row: number[] = [];
        for (let j: number = 0; j < matrix.length; j++) {
            row.push(matrix[j][i]);
        }
        rotatedMatrix.push(row);
    }
    return rotatedMatrix;
}