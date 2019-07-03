'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
let a:number;
function growingPurple(size:number,squareCount2:number) {
    ctx.fillStyle="purple";
    ctx.fillRect(size,size,size,size);
    ctx.strokeRect(size,size,size,size);
    a=size;
    
    
    for (let i:number = 1; i <= squareCount2; i++){
    ctx.fillRect(a,a,size*i,size*i);
    ctx.strokeRect(a,a,size*i,size*i);
    a=a+size*i;
}
}

growingPurple(10,6)