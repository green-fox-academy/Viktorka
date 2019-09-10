const express = require('express');
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
    connection.query(`SELECT * from music_player`, (err, dbInfo) => {
        // console.log(dbInfo)
        res.render('index.ejs', { dbInfo: dbInfo })})
})

app.get('/playlist', (req, res) => {
    connection.query(`SELECT * from playlist`, (err, playlist) => {
        res.send(playlist)
    })
})

// app.get('/', (req, res) => {
//     connection.query('select * from music_player;', (err, dbInfo) => {
//         if (err) {
//             // alert('Oops, something went wrong');
//         } else {
//             res.render('index', { dbInfo: dbInfo });
//         }
//     });
// });

module.exports = app;