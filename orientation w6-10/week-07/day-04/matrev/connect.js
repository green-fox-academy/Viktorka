'use strict'
const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: ''
});

const app = express();

app.get('/todos', (req, res) => {
    connection.query('select * from todos;', (err, rows) => {
        res.send(rows)
    })
})

// connection.connect(function (err) {

// })

connection.query('')