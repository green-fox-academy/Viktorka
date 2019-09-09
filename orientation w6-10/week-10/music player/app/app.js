const express = require('express');
// const fetch = require('node-fetch');
const app = express();
const mysql = require('mysql');
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'music_player',
});

app.get('/', (req, res) => {
    //   fetch('http://secure-reddit.herokuapp.com/simple/posts')
    //     .then(answer => answer.json())
    //     .then(json => res.render('index', { index: json.posts }));
    connection.query(`SELECT * from music_player`, (err, dbInfo) =>
        res.render('index', { dbInfo }))
})

module.exports = app;