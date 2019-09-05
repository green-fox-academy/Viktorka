
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
                alert(`Thank you for registering ${asd}`)
                location.href='http://localhost:3030'
            } else if (xhr.status===401){
                alert(`unathorised username`)
            } else {
                alert('Username already exists');
            }
        }
    };
    xhr.open('POST', '/register');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ password: password.value, username: username.value }));
    form.reset();
});