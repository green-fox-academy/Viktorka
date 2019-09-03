'use strict';

const express = require('express');
const app = express();
const PORT = 3030;
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'login',
});

app.use(express.static('views'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('/views/login.html', { root: __dirname });
})


app.post('/send', (req, res) => {
    let myQuery = `SELECT * FROM username
    WHERE username=? 
    AND password=?`;
    connection.query(myQuery, [req.body.username, req.body.password], (err, rows) => {
        console.log(rows)
        if (rows.length > 0) {
        } else {
            res.sendStatus(401);
        };
    })
    // if (req.body.username === rows[0].username && req.body.password === rows[0].password) {
    //     res.send('correct');


    console.log(`Username ${req.body.username}`);
    console.log(`Password ${req.body.password}`);
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})