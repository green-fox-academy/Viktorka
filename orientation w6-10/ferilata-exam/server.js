'use strict';
// npm init -y
// npm i express ejs mysql --save
// echo node_modules > .gitignore
let db = 'ferrilata' //= database name

const express = require('express');
const PORT = 5555;
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: db
});

const app = express();
app.use(express.json());
// app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile('/views/index.html', { root: __dirname });
});

app.get('/api/items', (req, res) => {
  connection.query(`SELECT * from items;`, (err, resp) => {
    if (err) {
      console.log(err.message);
      res.sendStatus(500);
    } else {
      res.send(resp);
    }
  })
})

app.post('/api/items/:id', (req, res) => {
  connection.query(`SELECT * from items
  WHERE id=?;`, [req.params.id], (err, resp) => {
    if (err) {
      console.log(err.message)
      res.sendStatus(500)
    } else {
      if (new Date() > resp[0].expiryDate) {
        res.send({ "message": "expired" });
      } else if (req.body.amount < resp[0].highestBid) {
        res.send({ "message": "Your bid is below the highest bid!" })
      } else if (req.body.amount > resp[0].highestBid){
        connection.query(`UPDATE items
        SET highestBid=?,
        highestBidderName=?
        WHERE id=?;`,[req.body.amount,req.body.name,req.params.id], (err, rows) => {
          if (err) {
            console.log(err.message)
            res.sendStatus(500);
          } else {
            res.send({message:'Success! oh yeah'})
          }
        })
      }
    }
  })
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});

