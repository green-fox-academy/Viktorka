    
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export = {}


ctx.beginPath();
ctx.moveTo(150,50);
ctx.lineTo(100,50);
ctx.lineTo(100,150);
ctx.lineTo(150,150);


ctx.moveTo(170,50);
ctx.lineTo(170,150);
ctx.lineTo(170,150);
ctx.moveTo(230,150);

//ctx.moveTo()
ctx.stroke()