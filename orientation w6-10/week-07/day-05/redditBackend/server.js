const express = require('express');
const app = express();
const PORT = 3005;
const path = require('path');
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'bookstore'
});

connection.connect(err => {
    if (err) {
        console.log("error connecting");
        console.log(err.message);
        return;
    }
    console.log("database c-c-connection is established");
});

app.use(express.json());
app.use(express.static('assets'));



app.get('/hello', (req, res) => {
    res.send('Hi World');
});




app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});