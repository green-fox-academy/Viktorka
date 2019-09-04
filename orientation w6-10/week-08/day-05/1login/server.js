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

app.get('/register', (req, res) => {
    res.sendFile('/views/register.html', { root: __dirname });
})

app.post('/register', (req, res) => {
    let queryOfMine = ` SELECT username from username
    WHERE username=?`
    connection.query(queryOfMine, [req.body.username], (err, reply) => {
        if (reply.length > 0) {
            res.status(400)
            res.send(`${req.body.username} is already in use`)
        } else {
            connection.query(`INSERT INTO username(username,password) VALUES(?,?)`,
                [req.body.username, req.body.password], function (err, result) {
                    if (err) {
                        // res.status(400)
                        res.send(err.message)
                        return
                    } else
                        res.send(result)
                })
        }
    })
})

app.get('/forgot', (req, res) => {
    connection.query(`SELECT username FROM username`, (err, username) =>
    res.json(username))
})

app.post('/send', (req, res) => {
    let myQuery = `SELECT * FROM username
    WHERE username=? 
    AND password=?`;
    connection.query(myQuery, [req.body.username, req.body.password], (err, rows) => {
        // console.log(rows)
        if (rows.length > 0) {
            res.send('correct')
        } else {
            res.sendStatus(401);
        };
    })
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})