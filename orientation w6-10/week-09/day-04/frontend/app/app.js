const express = require('express');
const fetch = require('node-fetch');
const app = express();
const mysql = require('mysql');
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static('./assets'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit',
});

app.get('/', (req, res) => {
    //   fetch('http://secure-reddit.herokuapp.com/simple/posts')
    //     .then(answer => answer.json())
    //     .then(json => res.render('index', { index: json.posts }));
    connection.query(`SELECT * from reddit`, (err, index) =>
        res.render('index', { index  }))
})

app.post('/', (req, res) => {
    if (req.body.id) {
        connection.query(`DELETE FROM reddit
    WHERE id=?`, [req.body.id], (err, resp) => {
            if (err) {
                res.send(err.message)
                res.status(401)
            } else {
                res.send(resp)
            }
        })
    } else if (req.body.upvote && req.body.id) {
        // connection.query(`UPDATE reddit
        // WHERE id=?
        // SET score=?`[req.body.id, req.body.score], (err, resp) => {
        //     if (err) {
        //         res.send(err.message)
        //         res.status(401)
        //     } else {
                res.send('asd')
            // }
        // })
    }
})


app.get('/post', (req, res) => {
    res.render('post')
})

app.post('/post', (req, res) => {
    connection.query(`INSERT INTO reddit (title,url) VALUES(?,?)`
        , [req.body.title, req.body.url], (err, result) => {
            if (err) {
                res.send(err.message)
            } else {
                res.send(result)
            }
        })
})

module.exports = app;