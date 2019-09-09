'use strict';

const audio = document.querySelector('audio');
const play = document.querySelector('#play')
const next=document.querySelector('.next')
const prev=document.querySelector('.prev')

// play.onclick =() => {
// play.play()
// }
audio.addEventListener('loadstart', () => console.log('loadstart happened'));
audio.addEventListener('play', () => console.log('play happened'));
audio.addEventListener('pause', () => console.log('pause happened'));
audio.addEventListener('ended', () => console.log('ended happened'));
audio.addEventListener('progress', () => console.log('progress happened'));

let nextSong = () => {
    
}
next.addEventListener('click', nextSong)