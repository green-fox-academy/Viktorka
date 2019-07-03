'use strict';
export = {}
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let xCord: number[] = [0, 400, 300, 255]
let yCord: number[] = [50, 300, 223, 150]
let color: string[] = ["green", "yellow", "tomato", "black"];
let width: number[] = [5,45,88,123]
let height:number[] = [190,90,22,30]

for (let i: number = 0; i < 4; i++) {

    ctx.fillStyle = color[i];
    ctx.fillRect(xCord[i], yCord[i], height[i], width[i] );

}
