'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export = {}
// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.
let a: number;

function check(size: number) {
    ctx.strokeRect(size, size, size, size);
    

    for (let i: number = 0; i < 1000; i++) {
       
        ctx.strokeRect(size, (size + size) * i, size, size); //sor
        ctx.fillRect((size + size) * i, size, size, size); //oszlop


        for (let a: number = 1; a < 1000; a = a + 2) {
            
            ctx.fillRect(size *a, (size + size) * i, size, size);
            ctx.fillRect((size + size) * i, size*a, size, size);
        }
    }
}
// }


check(50)