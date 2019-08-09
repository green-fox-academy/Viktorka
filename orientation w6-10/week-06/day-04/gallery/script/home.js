'use strict'

document.querySelector(".small").classList.add("currentImage");
let prevButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let mainImg = document.querySelector(".main");

function toPreviousImage() {
    let prevImage = document.querySelector(".currentImage").previousElementSibling;
    if (prevImage === null) {
        let allElement = document.querySelectorAll(".small")
        prevImage = allElement[allElement.length - 1];
    }
    mainImg.src = prevImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    prevImage.classList.add("currentImage");
}

function toNextImage() {
    let nextImage = document.querySelector(".currentImage").nextElementSibling;
    if (nextImage === null) {
        nextImage = document.querySelector(".small");
    }
    mainImg.src = nextImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    nextImage.classList.add("currentImage");
}

function onKeyPress(event) {
    switch (event.keyCode) {
        case 37:
            toPreviousImage();
            break;
        case 39:
            toNextImage();
            break;
    }
}

let smallPix = document.querySelectorAll(".small");

for (let i = 0; i < smallPix.length; i++) {
    smallPix[i].onclick = () => { //(event)
        mainImg.src = smallPix[i].src; //event.target.src
        document.querySelector(".currentImage").classList.remove("currentImage");
        smallPix[i].classList.add('currentImage');
    }
}


nextButton.onclick = () => {
    toNextImage();
}
prevButton.onclick = () => {
    toPreviousImage();
}

document.body.addEventListener('keydown', onKeyPress);