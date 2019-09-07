'use strict';


let h1 = document.querySelector('h1');
let a = document.createElement('a')
let whatabout = document.querySelector('.whatAbout');
a.setAttribute('href', '#')
a.textContent = ` r/${h1.textContent.toLowerCase()}`
whatabout.appendChild(a)
let btn = document.querySelector('button')
function redirect() {
    window.location = 'http://localhost:2999/post'
}

const id = document.querySelector('.hide');
const form = document.querySelector('.delete');
form.addEventListener('submit', e => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(id.textContent)
            location.href = 'http://localhost:2999'
        }
    }

xhr.open('POST', '/');
xhr.setRequestHeader('Content-Type', 'application/json')
xhr.send(JSON.stringify({id: id.textContent}))
form.reset()
});