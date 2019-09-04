const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
    // TODO: implement this method
    console.log(req.query.message)
    if (req.query.message) {
        res.json({
            'received': req.query.message,
            'transalated': 'I am Groot!'
        })
    }
    else {
        res.status(400)
        res.json({ 'error': 'I am Groot!' })

    }

})
app.get('/yondu', (req, res) => {
    console.log(Number(req.query.time))
    if (req.query.distance && req.query.time && Number(req.query.time)!==0 ) {
        res.json({
            'distance': req.query.distance,
            'time': req.query.time,
            'speed': req.query.distance / req.query.time
        })
    } else if (Number(req.query.time)===0 ) {
        res.status(400)
        res.json({
            'distance': req.query.distance,
            'time': req.query.time,
            'speed': 'Incalculable'
        })
    } else {
        res.status(400)
    }
})

module.exports = app;