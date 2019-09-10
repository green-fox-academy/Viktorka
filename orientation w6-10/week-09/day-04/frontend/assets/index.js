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
const deleteForm = document.querySelectorAll('.delete');

deleteForm.forEach(element => {
    element.addEventListener('submit', e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                location.href = 'http://localhost:2999'
            }
        }

        xhr.open('POST', '/');
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({ id: element.textContent }))
        deleteForm.reset()
    });
})

const upvote = () => {
    let upvote = document.querySelector('upvote');
    upvote.addEventListener('click', e => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                location.href = 'http://localhost:2999'
            }
        }

        xhr.open('POST', '/');
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.send(JSON.stringify({ id: element.textContent }))
        deleteForm.reset()
    })
}
// DOWNVOTE WORKS SOMEWHERE ELSE
// app.put('/posts/:id/downvote', (req, res) => {
//     const idNumber = req.params.id;
//     connection.query(
//       `UPDATE reddit SET score = score - 1 WHERE id = ?;`, idNumber, (err, rows) => {
//         if (err) {
//           console.log(err);
//           res.sendStatus(500);
//           return;
//         } else {
//           res.json('downvoted');
//         }
//       })
  

// const upvoteForm = document.querySelectorAll('.upvote')
// upvote.forEach(element => {
//     element.addEventListener('submit', e => {
//         e.preventDefault();
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 location.href = 'http://localhost:2999'
//             }
//         }

//         xhr.open('POST', '/');
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.send(JSON.stringify({ id: element.textContent , score :}))
//         deleteForm.reset()
//     });
// })

// let score = document.querySelector('.score');
// score.textContent = 6;

// function xhrMagic(body, bodyValue) {
//     e.preventDefault();
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             location.href = 'http://localhost:2999'
//         }
//     }

//     xhr.open('POST', '/');
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     xhr.send(JSON.stringify({ id: bodyValue }))
//     deleteForm.reset()
// };


//remove post as on click add event listener?

// xhr.send = > +1 for upvote text content update database?





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
// const deleteForm = document.querySelectorAll('.delete');
// // const deleteMe = document.querySelector('.delete').classList.add('toDelete');

// const toDelete = document.querySelector('.toDelete')
// if (toDelete !== null) {
//     for (let i = 0; i < deleteForm.length; i++) {
//         deleteForm[i].onclick = () => {
//             // document.querySelector('.toDelete').classList.remove('toDelete')
//             deleteForm[i].classList.add('toDelete')
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
//         deleteForm.reset()
//     });
// }

// deleteForm.forEach(element => {
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
//         deleteForm.reset()
//     });
// })
