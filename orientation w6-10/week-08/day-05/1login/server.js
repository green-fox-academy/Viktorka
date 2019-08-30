'use strict';

const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('views'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/views/login.html', { root: __dirname });
})
let checker = false;

app.post('/send', (req, res) => {
    console.log(`Username ${req.body.username}`);
    console.log(`Password ${req.body.password}`);
    if (req.body.username === 'asd' && req.body.password === 'asd') {
        // console.log('correct');
        // res.send('correct');
        checker = true;
    } else {
        throw new Error('not right');
        
        console.log('incorrect');
        checker = false;
        // res.send(alert('no'))
    }
    if (checker) {
        res.send('');
    }
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})