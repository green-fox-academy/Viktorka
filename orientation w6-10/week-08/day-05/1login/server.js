'use strict';

const express = require('express');
const app = express();
const PORT = 3030;

app.use(express.static('views'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/views/login.html', {root :__dirname})
})












app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})