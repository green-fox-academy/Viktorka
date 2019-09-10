'use strict';

const audio = document.querySelector('audio');
const play = document.querySelector('#play');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const playlist = document.querySelectorAll('.hide')
let actualSong = document.querySelector('.hide')
actualSong.classList.add('actual')
const current = document.querySelector('.current')
let activeTitle = document.querySelector('.activeTitle')
activeTitle.textContent = actualSong.parentElement.innerText
// console.log(actualSong.parentElement.innerText)



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
    if (audio.src==='http://localhost:3123/5.mp3'){
        next.disabled = true
    } else if (audio.src==='http://localhost:3123/1.mp3'){
        return false
    }
}

let nextSong = () => {
    let nextSong = document.querySelector('.actual').parentElement.nextElementSibling.childNodes[3]
     let removeMe = document.querySelector('.actual')
    audio.src = nextSong.textContent;
    removeMe.classList.remove('actual');
    nextSong.classList.add('actual');
    if (srcChecker()){
        next.disabled = true
    } else {
        next.disabled = false
    }
    console.log(document.querySelector('.tracks').childNodes[1].childNodes)

    activeTitle.textContent = nextSong.parentElement.innerText

}
let prevSong = () => {
    let prevSong = document.querySelector('.actual').parentElement.previousElementSibling.childNodes[3]
    if (audio.src === "http://localhost:3123/1.mp3") {
        prev.disabled = true;
    }

    let removeMe2 = document.querySelector('.actual');
    audio.src = prevSong.textContent;
    removeMe2.classList.remove('actual');
    prevSong.classList.add('actual');
    activeTitle.textContent = prevSong.parentElement.innerText
    if (srcChecker()){
        next.disabled = true
    } else {
        next.disabled = false
    }

    // same as next
}
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);