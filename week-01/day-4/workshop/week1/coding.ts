let a:number = 6; //coding hours a day
let b:number = 17; // weeks long semester
let c:number = 5; // workdays
let d:number = 52; //weekly work hours
let e:number = d/c; //daily work hours
let f:number = (a/e)*100; //% of coding hours in a semester
let g:number = Math.round (f);

console.log(a*b*c+(' hours are spent with coding'))
console.log(g+(' % of hours are spent with coding in a semester'))