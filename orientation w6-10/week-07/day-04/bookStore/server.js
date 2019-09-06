'use strict';

const express = require('express');
const PORT = 8080;
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
app.set('view engine', 'ejs');
app.use(express.static('views'));

// connection.connect(err => {
//     if (err) {
//         console.log('error connecting');
//         console.log(err.message);
//         return;
//     }
//     console.log('database cconnection is established');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/titles', (req, res) => {
    connection.query('select book_name from book_mast;', (err, rows) => {
        res.json(rows);
    });
})

app.get('/info', (req, res) => {
    connection.query(`select author.aut_name,book_mast.book_name,category.cate_descrip,publisher.pub_name,
    book_mast.book_price from author,book_mast,category,publisher where author.aut_id=book_mast.aut_id AND
    category.cate_id=book_mast.cate_id AND publisher.pub_id=book_mast.pub_id ;`, (err, rows) => {
            console.log(err);
            res.json(rows);
        });
})

app.get('/books', (req, res) => {
    function pushAndSend(from, whatToSend) {
        from.forEach(element => {
            whatToSend.push(element.book_name)
            res.send(whatToSend);
        });
    }
    let query = '';
    let params = [];
    let titles = [];
    if (req.query.category) {
        connection.query(`select book_mast.book_name from book_mast,category WHERE 
        category.cate_descrip=? AND book_mast.cate_id=category.cate_id;`, [req.query.category], (err, rows) => {
                console.log(err);
                if (err !== null) {
                    res.sendStatus(500);
                    return
                }
                // pushAndSend(rows, titles);
                // let titles = [];
                rows.forEach(element => {
                    titles.push(element.book_name)
                });
                res.send(titles)
                // //  res.json(theResponse);
            })
    } else if (req.query.publisher) { //osszes ag atiras
        query = `select book_mast.book_name from book_mast,publisher
         WHERE publisher.pub_name=? AND book_mast.pub_id=publisher.pub_id;`;
        params = [req.query.publisher]


    } else if (req.query.plt) {
        connection.query(`select book_mast.book_name, book_mast.book_price from book_mast 
        WHERE book_mast.book_price<?';`, [req.query.plt], (err, rows) => {
                // let titles = [];
                rows.forEach(element => {
                    titles.push(element.book_name)
                });
                res.send(titles)
            })
    } else if (req.query.pgt) {

        connection.query(`select book_mast.book_name, book_mast.book_price from book_mast WHERE book_mast.book_price>?;`, [req.query.pgt], (err, rows) => {
            // let titles = [];
            rows.forEach(element => {
                titles.push(element.book_name)
            });
            res.send(titles)
        })
    }
    connection.query(query, params, (err, rows) => {
        // let titles = [];
        rows.forEach(element => {
            titles.push(element.book_name)
            res.send(titles)
        });

    })
})



app.listen(PORT);