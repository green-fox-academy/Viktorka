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

//working to delete top post
const form = document.querySelectorAll('.delete');
form.forEach(element => {

    element.addEventListener('submit', e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log(element.textContent)
                location.href = 'http://localhost:2999'
            }
        }

        xhr.open('POST', '/');
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({ id: element.textContent }))
        form.reset()
    });
})


// const id = document.querySelector('.hide');


// const id = document.querySelectorAll('.hide');

// id.forEach(e =>{
    //     e.addEventListener('submit', event =>{
//         event.preventDefault();
//             const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             console.log(id.textContent)
//             // location.href = 'http://localhost:2999'
//         }
//     }
//     })
// })

// const id = document.querySelector('.hide');

// for (let i = 0; i < smallPix.length; i++) {
//     smallPix[i].onclick = () => { //(event)
//         mainImg.src = smallPix[i].src; //event.target.src
//         document.querySelector(".currentImage").classList.remove("currentImage");
//         smallPix[i].classList.add('currentImage');
//         changeText();
//     }
// }
// const form = document.querySelectorAll('.delete');
// // const deleteMe = document.querySelector('.delete').classList.add('toDelete');

// const toDelete = document.querySelector('.toDelete')
// if (toDelete !== null) {
//     for (let i = 0; i < form.length; i++) {
//         form[i].onclick = () => {
//             // document.querySelector('.toDelete').classList.remove('toDelete')
//             form[i].classList.add('toDelete')
//         }
//     }
//     toDelete.addEventListener('submit', e => {
//         e.preventDefault();
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 console.log(toDelete.textContent)
//                 location.href = 'http://localhost:2999'
//             }
//         }

//         xhr.open('POST', '/');
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.send(JSON.stringify({ id: toDelete.textContent }))
//         form.reset()
//     });
// }

// form.forEach(element => {
//     element.addEventListener('submit', e => {
//         e.preventDefault();
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 console.log(element.textContent)
//                 // location.href = 'http://localhost:2999'
//             }
//         }
//         xhr.open('POST', '/');
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.send(JSON.stringify({ id: element.textContent }))
//         form.reset()
//     });
// })
