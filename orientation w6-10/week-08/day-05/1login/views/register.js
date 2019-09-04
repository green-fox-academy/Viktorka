
'use strict';

const password = document.querySelector('#password');
const username = document.querySelector('#username');
const form = document.querySelector('form');


form.addEventListener('submit', e => {
    e.preventDefault();
    let asd=username.value
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(`You have been registered as ${asd}`);
            } else {
                alert('Try again');
            }
        }
    };
    xhr.open('POST', '/register');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ password: password.value, username: username.value }));
    form.reset();
});