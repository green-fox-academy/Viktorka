'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint no1', (t) => {
    // TODO: implement it
    request(app)
        .get('/groot?message=asd')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.same(res.body, {'received':'asd', 'transalated':'I am Groot!'});
            t.end()
        })
});

test('groot endpoint no2', (t) => {
    // TODO: implement it
    request(app)
        .get('/groot?message=')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.same(res.body, {'error':'I am Groot!'});
            t.end()
        })
});

test('groot endpoint no3', (t) => {
    // TODO: implement it
    request(app)
        .get('/groot?message=qwe')
        // .send()
        .end((err, res) => {
            if (err) throw err;
            t.same(res.body, {'received':'qwe', 'transalated':'I am Groot!'});
            t.end()
        })
});