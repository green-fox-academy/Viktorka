const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    // TODO: implement this method
    console.log(req.query.message.length)
    if (req.query.message.length===0) {
        res.json({ "error": "I am Groot!" })
    }
    else {
        res.json({
            "received": req.query.message,
            "transalated": "I am Groot!"
        })
    };
})
module.exports = app;