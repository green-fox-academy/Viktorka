'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

// function fruitBasket(){
//     console.log("apple");
//     console.log(setTimeout(console.log("pear"),1000));
//     setTimeout(console.log("melon"),2000);
//     setTimeout(console.log("grapes"),5000);
// }

function apple() {
    console.log("apple")
}
function pear() {
    console.log("pear")
}
function melon() {
    console.log("melon")
}
function grapes() {
    console.log("grapes")
}

function fruitBasket() { // const fruitbasket = () => {
    apple();
    setTimeout(() => {
        pear();
    }, 1000);
    setTimeout(() => {
        melon();
    }, 3000);
    setTimeout(() => {
        grapes();
    }, 5000);
}

fruitBasket()