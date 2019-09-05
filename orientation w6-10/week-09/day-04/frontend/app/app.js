const express = require('express');
const fetch = require('node-fetch');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('./assets'));


// app.get('/articles',  (req, res) => {
//   res.render('index');
// });

app.get('/',  (req, res) => {
  fetch('http://secure-reddit.herokuapp.com/simple/posts')
    .then(answer => answer.json())
    .then(json => res.render('index', { index: json.posts }));
});

module.exports = app;