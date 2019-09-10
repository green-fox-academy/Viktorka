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
        res.render('index.ejs', { dbInfo: dbInfo })
    })
})

app.get('/playlist', (req, res) => {
    connection.query(`SELECT * from playlist`, (err, playlist) => {
        res.send(playlist)
    })
})

app.post('/playlist', (req, res) => {
    connection.query(`INSERT into playlist (name) VALUES(?)`, [req.body.playlist])
    // console.log(req.body)
    res.send('ok')
})

// app.delete('/playlist/:id', (req, res) => {
//     connection.query(`DELETE from playlist where id=?`, [req.params.id], (req, res => {
//         if (err) {
//             res.send('nope')
//             console.log(err)
//         } else {
//             res.send('valami')
//         }
//     }

//     ))
// })
app.delete('/playlist/:id', (req, res) => {
    connection.query('DELETE from playlist where id=?', [req.params.id], (err, rows) => {
        if (err) {
            console.log('There was an error: ', err);
            res.sendStatus(500);
            return;
        }
        res.json(rows);
    });
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