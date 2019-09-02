'use strict';

// let promiseFF = new Promise ((fulfill, reject) =>{
//     fulfill('valueFF')
// });

// let promiseFF2 = Promise.resolve('valueFF2')


// function stuff(stuffs){
//     let asd = stuffs.split('').sort().join('')
//     console.log(asd)
// }

// promiseFF.then(stuff)
// promiseFF2.then(console.log)

let promiseR = new Promise ((fulfill, reject) =>{
    reject(new Error('error value'))
});

let promiseR2 = Promise.reject(new Error ('valueFF2'))

promiseR.catch(err =>{
    console.log(`error ${err.message}`)
});
