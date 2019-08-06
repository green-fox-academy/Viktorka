'use strict';
export={}
const myCanvasWidth: number = 600;
const myCanvasHeight: number = 600;
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.width = myCanvasWidth;
canvas.height = myCanvasHeight;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares
// red, orange, yellow, green, blue, indigo, violet
let colourChoice:any [] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
let size:number=canvas.width/7;
let colour="red"
function rainboW(size: number, colour:any) {
    ctx.fillStyle=colour;
    ctx.fillRect((canvas.width / 2) - (size / 2), (canvas.height / 2) - (size / 2), size, size);

}
for (let i:number=7 ; i > 0; i--){
    rainboW(size*i,colourChoice[i])


}





/*
let colour:any [] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

function rainboW(size: number, colour: any) {
    ctx.fillStyle = colour;
    ctx.fillRect((canvas.width / 2) - (size / 2), (canvas.height / 2) - (size / 2), size, size);
}
/*let i: number = 0; i < 6; i++ = a;
let decrease: number = 550, decrease < 600, decrease -= 50 = b;  
for  (let i: number = 0; i < 6; i++ ) &&  (let reduce: number = 550, reduce > 0 , reduce -= 50 ) {
    rainboW(reduce, "red")
}


/*
if (a && b) {
    rainboW(decrease, colour[i])
}
  /*

}
let theSize:number = 50;
*/
rainboW(50,"red") 

