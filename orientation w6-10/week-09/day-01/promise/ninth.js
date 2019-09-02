'use strict';

// let promise = new Promise((fulfil, reject) => {
//     setTimeout(() => fulfil('FULFILLED!'), 300);
// })
// promise.then(result => {
//     console.log(result);
// })

// function parsePromised() {
//     let promise = new Promise((fulfilled, reject) => {
//         fulfilled('value');
//     })
// }

// function riskyStuff() {
//     try {
//         JSON.parse(process.argv[2].)
//     } catch (e) {
//         console.log(e.message)
//     }
// }
function parsePromised() {
    let promise;
    try {
        promise = Promise.resolve(JSON.parse(process.argv[2]));
    } catch (e) {
        promise = Promise.reject(e.message)
    } return promise;
}

// parsePromised().then(null,console.log) ===
parsePromised().then(console.log).catch(console.log)


// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';

//     function parsePromised(json) {
//       return new Promise(function (fulfill, reject) {
//         try {
//           fulfill(JSON.parse(json));
//         } catch (e) {
//           reject(e);
//         }
//       });
//     }

//     function onReject(error) {
//       console.log(error.message);
//     }

//     parsePromised(process.argv[2])
//     .then(null, onReject);