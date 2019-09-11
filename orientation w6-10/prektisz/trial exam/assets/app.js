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
  database: 'trialexam'
});

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/api/links', (req, res) => {
  // console.log(req.body.alias)
  console.log(req.body)
  connection.query(`SELECT alias from aliases
  where alias=?`, [req.body.alias], (err, resp) => {
    if (resp.length > 0) {
      res.sendStatus(400)
      // res.send(`${alias} alread in use b`)
    } else {
      const secret_code = Math.floor(1000 + Math.random() * 9000);
      connection.query(`INSERT into aliases (url, alias, secret_code) VALUES(?,?,?)`, [req.body.url, req.body.alias, secret_code], (err, rows) => {
        if (err) {
          res.send(err.message)
        } else {
          connection.query(`select * from aliases where alias=?`, [req.body.alias], (err, reply) => {
            res.send(reply)
          })
        }
      })
    }
  })
})
app.get('/api/links',(req,res) => {
  connection.query(`SELECT id,url,alias,hit_count from aliases`, (err,resp)=>{
    res.send(resp)
  })
})

app.get('/a/:alias', (req, res) => {
  // console.log(req.params.alias)
  connection.query(`SELECT alias from aliases where alias=?`, [req.params.alias], (err, resp) => {
    if (resp.length === 0) {
      res.sendStatus(404)
    } else {
      connection.query(`UPDATE aliases 
      SET hit_count= hit_count + 1
      WHERE alias=?`,
        [req.params.alias],
        (err, reply) => {
          if(err){
            console.log(err.message)
          }else{
            connection.query(`SELECT url from aliases 
            WHERE alias=?`,[req.params.alias], (err,reply) =>{
              // console.log(reply[0].url)
              res.redirect(reply[0].url)
            })
          }
          
        })
    }
  })
})



module.exports = app;