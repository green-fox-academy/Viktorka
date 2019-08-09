'use strict'
const imageList = [
    { url: "1.jpg", text: "1" },
    { url: "2.jpg", text: '2' },
    { url: "3.jpg", text: '3' },
    { url: "4.jpg", text: '4' },
    { url: "5.jpg", text: '5' },
    { url: "6.jpg", text: '6' },
    { url: "7.jpg", text: "7" },
    { url: "8.jpg", text: '8' },
    { url: "9.jpg", text: '9' }
]
let currentImage = document.querySelector(".small").classList.add("currentImage");
let prevButton = document.querySelector(".previous");
let nextButton = document.querySelector(".next");
let mainImg = document.querySelector(".main");
let mainText = document.querySelector("figurecapture");

function changeText() {
    for (let i = 0; i < imageList.length; i++) {
        if (currentImage.src === imageList[i].url) {
            mainText = imageList[i].text;
        }
    }
}

function toPreviousImage() {
    let prevImage = document.querySelector(".currentImage").previousElementSibling;
    if (prevImage === null) {
        let allElement = document.querySelectorAll(".small")
        prevImage = allElement[allElement.length - 1];
    }
    mainImg.src = prevImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    prevImage.classList.add("currentImage");
    changeText();
}

function toNextImage() {
    let nextImage = document.querySelector(".currentImage").nextElementSibling;
    if (nextImage === null) {
        nextImage = document.querySelector(".small");
    }
    mainImg.src = nextImage.src;
    document.querySelector(".currentImage").classList.remove("currentImage");
    nextImage.classList.add("currentImage");
    changeText();
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

