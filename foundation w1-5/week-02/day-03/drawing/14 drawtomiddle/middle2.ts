'use strict';
export = {}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.
ctx.beginPath(); 
function drawTheLine(x: number, y: number) {
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.strokeStyle = "white";
    ctx.stroke();
    if (let i:number = 0; i< )
}

drawTheLine(50,50)