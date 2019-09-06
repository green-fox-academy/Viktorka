'use strict';

const express = require('express');
const PORT = 4000;
const path = require('path');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookstore'
});

const app = express();
app.use(express.json());

app.get('/bla', (req, res) => {
    if (req.query.bookid) {
        connection.query(`SELECT * from book_mast 
        WHERE book_id=?;`, req.query.bookid, (err, result) => {
                res.json(result);
            });
    } else {
        res.send('nope')
    }
})



app.listen(PORT);