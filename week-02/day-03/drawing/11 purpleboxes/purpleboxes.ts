    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export = {}
// DO NOT TOUCH THE CODE ABOVE THIS LINE

function purpleSquare(size:number/*, squareCount:number*/) {
    ctx.fillStyle="purple";
    ctx.fillRect(size,size,size,size);
    ctx.strokeRect(size,size,size,size);
   ctx.moveTo(size,size);
    
    
    for (let i:number = 1; i < 19; i++){
    ctx.fillRect(size*i,size*i,size,size);
    ctx.strokeRect(size*i,size*i,size,size);
}
}

purpleSquare(10/*,19*/)


// ctx.strokeRect(size*i,size*i,size,size);