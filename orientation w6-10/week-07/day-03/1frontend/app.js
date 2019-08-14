const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.json());
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
    if (isNaN(parseInt(req.query.input))) {
        res.json({ "error": "Please provide an input!" })
    } else {
        res.json({
            "received": parseInt(req.query.input),
            "result": parseInt(req.query.input) * 2
        })
    }
})

app.get('/greeter', (req, res) => {
    if (req.query.name === undefined && req.query.title === undefined) {
        res.json({
            "error": "Please provide a name and a title!"

        })
    } else if (req.query.name === undefined) {
        res.json({
            "error": "Please provide a name!"
        })
    } else if (req.query.title === undefined) {
        res.json({
            "error": "Please provide a title!"
        })
    } else {
        res.json({ "welcome_message": "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!" })
    }
})

app.get('/appenda/:word', (req, res) => {
    res.json({
        "appended": "word" + "a",
    })
})




app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});