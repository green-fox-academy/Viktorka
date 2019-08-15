'use strict';

const express = require('express');
const mysql = require('mysql');
const PORT = 8080;
const path = require('path');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookstore'
});

const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));

connection.connect(err => {
    if (err) {
        console.log("error connecting");
        console.log(err.message);
        return;
    }
    console.log("database cconnection is established");
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/titles', (req, res) => {
    connection.query('select book_name,book_price from book_mast;', (err, rows) => {
        res.json(rows);
    });
})

app.get('/info', (req, res) => {
    connection.query('select author.aut_name,book_mast.book_name,category.cate_descrip from author,book_mast,category where author.aut_id=book_mast.aut_id AND category.cate_id=book_mast.cate_id;', (err, rows) => {
        console.log(err);
        res.json(rows);
    });
})

app.listen(PORT);