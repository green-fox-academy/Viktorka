'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)
// Math.floor(Math.random() * 11);       returns a random integer from 0 to 10
let numOfStars: number = Math.floor(Math.random() * 100);
let starColour: string[] = ["rgb(220,220,220)", "rgb(211,211,211)", "rgb(192,192,192)", "rgb(169,169,169)", "rgb(128,128,128)", "rgb(105,105,105)", "rgb(119,136,153)","white","yellow","gray","grey"]
ctx.fillRect(0, 0, 600, 400);
function star(){
let size: number = Math.floor(Math.random() * 10)
let xCord: number = Math.floor(Math.random() * 601);
let yCord: number = Math.floor(Math.random() * 401);
let daColour: number = Math.floor(Math.random() * starColour.length);
ctx.fillStyle = starColour[daColour];
ctx.fillRect(xCord, yCord, size, size);
}
for (let a: number = 0; a < numOfStars; a++){
    star();
}
