'use strict';

const audio = document.querySelector('audio');
const play = document.querySelector('#play');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
// const playlist = document.querySelectorAll('.hide')
let actualSong = document.querySelector('.title')
actualSong.classList.add('actual')
const current = document.querySelector('.current')
let activeTitle = document.querySelector('.activeTitle')
activeTitle.textContent = actualSong.innerText
let nodeArray = Array.from(document.querySelectorAll('.tracks')[0].childNodes)





// console.log(title.textContent.split(' ')[0])
// current.textContent=title.textContent.split(' ')[0]

// play.onclick =() => {
// play.play()
// }
audio.addEventListener('loadstart', () => console.log('loadstart happened'));
audio.addEventListener('play', () => console.log('play happened'));
audio.addEventListener('pause', () => console.log('pause happened'));
audio.addEventListener('ended', () => console.log('ended happened'));
audio.addEventListener('progress', () => console.log('progress happened'));

function srcChecker() {
    if (audio.src===nodeArray[nodeArray.length-2].childNodes[3].textContent){
        next.disabled = true
    } else if (audio.src==='http://localhost:3123/1.mp3'){
        return false
    }
}

let nextSong = () => {
    let removeMe = document.querySelector('.actual')
    console.log(removeMe.nextElementSibling)
    audio.src = removeMe.nextElementSibling.childNodes[3].textContent;
    removeMe.nextElementSibling.classList.add('actual');    
    removeMe.classList.remove('actual');
    activeTitle.textContent = removeMe.nextElementSibling.innerText;
    // let nextSong = document.querySelector('.actual').parentElement.nextElementSibling.childNodes[3]
    // console.log(removeMe.childNodes[0].textContent,removeMe.childNodes[3].textContent)
    // if (srcChecker()){
    //     next.disabled = true
    // } else {
    //     next.disabled = false
    // }
    // console.log(nextSong.parentElement)
    // activeTitle.textContent = nextSong.parentElement.innerText;
    // audio.play();
    // reopen here

    // console.log(document.querySelector('.tracks').childNodes[1].lastChild.textContent)
    // console.log(document.querySelectorAll('.tracks')[0].childNodes)
    // console.log(srcChecker())
    // nextSong.parentElement.style.cssText="color: blue"
    // console.log(nodeArray[nodeArray.length-2].childNodes[3].textContent)

}
let prevSong = () => {
    let removeMe = document.querySelector('.actual')
    console.log(removeMe.previousElementSibling)
    audio.src = removeMe.previousElementSibling.childNodes[3].textContent;
    removeMe.previousElementSibling.classList.add('actual');    
    removeMe.classList.remove('actual');
    activeTitle.textContent = removeMe.previousElementSibling.innerText;

    // let prevSong = document.querySelector('.actual').parentElement.previousElementSibling.childNodes[3]
    // if (audio.src === "http://localhost:3123/1.mp3") {
    //     prev.disabled = true;
    // }

    // let removeMe2 = document.querySelector('.actual');
    // audio.src = prevSong.textContent;
    // removeMe2.classList.remove('actual');
    // prevSong.classList.add('actual');
    // activeTitle.textContent = prevSong.parentElement.innerText
    // if (srcChecker()){
    //     next.disabled = true
    // } else {
    //     next.disabled = false
    // }

    // same as next
}

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);