'use strict';
export = {}
const myCanvasWidth:number = 600;
const myCanvasHeight:number = 400;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width=myCanvasWidth;
canvas.height=myCanvasHeight;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;


// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.


ctx.beginPath();
ctx.fillStyle="green";
ctx.fillRect(295,195,10,10);
