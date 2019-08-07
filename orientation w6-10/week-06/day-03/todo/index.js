const express = require('express');
const app = express();
const PORT = 3002;
const todos = [
    'get up',
    'survive',
    'go back to bed',
];

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('home', { title: "Todoo", todo: todos });

});