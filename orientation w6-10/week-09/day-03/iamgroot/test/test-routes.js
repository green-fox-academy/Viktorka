'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

// test('groot endpoint no1', (t) => {
//     // TODO: implement it
//     request(app)
//         .get('/groot?message=asd')
//         // .send()
//         .end((err, res) => {
//             if (err) throw err;
//             t.same(res.body, {'received':'asd', 'transalated':'I am Groot!'});
//             t.end()
//         })
// });

// test('groot endpoint no2', (t) => {
//     // TODO: implement it
//     request(app)
//         .get('/groot?message=')
//         // .send()
//         .end((err, res) => {
//             if (err) throw err;
//             t.same(res.body, {'error':'I am Groot!'});
//             t.end()
//         })
// });

// test('groot endpoint no3', (t) => {
//     // TODO: implement it
//     request(app)
//         .get('/groot?message=qwe')
//         // .send()
//         .end((err, res) => {
//             if (err) throw err;
//             t.same(res.body, {'received':'qwe', 'transalated':'I am Groot!'});
//             t.end()
//         })
// });

 
// test('groot endpoint no4 sends 200 in case of not missing param', (t) => {
//     // TODO: implement it
//     request(app)
//         .get('/groot?message=qwe')
//         // .send()
//         .end((err, res) => {
//             if (err) throw err;
//             t.equal(res.status,200)
//             t.same(res.body, {'received':'qwe', 'transalated':'I am Groot!'});
//             t.end()
//         })
// });

// test('groot endpoint no5 sends 400 in case of missing param', (t) => {
//     // TODO: implement it
//     request(app)
//         .get('/groot?message=')
//         // .send()
//         .end((err, res) => {
//             if (err) throw err;
//             t.equal(res.status,400)
//             t.end()
//         })
// });

test('yondu endpoint no1', (t) => {
    // TODO: implement it
    request(app)
        .get('/yondu?distance=100&time=10')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.same(res.body, {'distance':'100', 'time':'10','speed':10});
            t.end()
        })
});

test('yondu endpoint no2', (t) => {
    // TODO: implement it
    request(app)
        .get('/yondu?distance=100&time=0')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.same(res.body, {'distance':'100', 'time':'0','speed':'Incalculable'});
            t.end()
        })
});

test('yondu endpoint no3', (t) => {
    // TODO: implement it
    request(app)
        .get('/yondu?distance=100&time=10')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.equal(res.status,200)
            // t.same(res.body, {'distance':'100', 'time':'10','speed':10});
            t.end()
        })
});

test('yondu endpoint no4', (t) => {
    // TODO: implement it
    request(app)
        .get('/yondu?distance=100&time=0')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.equal(res.status,400)
            t.same(res.body, {'distance':'100', 'time':'0','speed':'Incalculable'});
            t.end()
        })
});