const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('assets'));


app.get('/', (req, res) => {
    res.send('asd');
});

const doTheStuff = require('./mathstuff');


app.post('/arrays', doTheStuff);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});