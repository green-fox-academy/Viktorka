'use strict';
export = {}
const myCanvasWidth: number = 800;
const myCanvasHeight: number = 600;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeight;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

let size:number = 50;
function drawMeLikeYourFrenchie(size: number) {
    ctx.strokeRect((canvas.width / 2) - (size / 2), (canvas.height / 2) - (size / 2), size, size);

}
for (let i:number=1 ; i < 4; i++){
    drawMeLikeYourFrenchie(size*i)
}

/* ctx.fillStyle = "green";
drawMeLikeYourFrenchie (150);
ctx.fillStyle = "blue";
drawMeLikeYourFrenchie (100);
ctx.fillStyle = "yellow";
drawMeLikeYourFrenchie (50); */
