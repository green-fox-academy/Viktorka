'use strict';

const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('views'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/views/login.html', { root: __dirname });
})

app.post('/send', (req, res) => {
    console.log(`Username ${req.body.username}`);
    console.log(`Password ${req.body.password}`);
    // kellene egy database ahol van username es password es osszekotni a kettot
    if (req.body.username === 'asd' && req.body.password === 'asd') {
        res.send('correct');
    } else {
        throw new Error('not right');
    }
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})