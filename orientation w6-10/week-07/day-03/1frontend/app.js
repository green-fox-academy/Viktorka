const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
app.use(express.json());
app.use(express.static('assets'));


const factorio = (input) => {
    if (input == 0) {
        return 1;
    }
    else {
        let fact = 1;
        for (let i = 1; i <= input; i++) {
            fact *= i;
        }
        return fact;
    }
}


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
        "appended": req.params.word + "a",
    })
})

app.post('/dountil/:action', (req, res) => {
    if (req.params.action === "sum") {
        res.json({
            "result": (req.body.until + 1) * req.body.until / 2
        })
    }
    if (req.params.action === "factor"){
        res.json({
            "result" : factorio(req.body.until)
        })
    }
})

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});