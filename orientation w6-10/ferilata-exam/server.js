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
app.set('view engine', 'ejs');
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


app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
