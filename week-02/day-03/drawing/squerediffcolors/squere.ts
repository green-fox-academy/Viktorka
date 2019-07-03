'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
export = {}
ctx.beginPath();
ctx.strokeStyle= "rgb(255,0,0)";
ctx.moveTo(250,150);
ctx.lineTo(350,150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.moveTo(350,150);
ctx.lineTo(350,250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle ="blue";
ctx.moveTo(350,250);
ctx.lineTo(250,250);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.moveTo(250,250);
ctx.lineTo(250,150);
ctx.stroke();