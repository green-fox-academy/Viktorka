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
    if (req.query.distance && req.query.time && Number(req.query.time) !== 0) {
        res.json({
            'distance': req.query.distance,
            'time': req.query.time,
            'speed': req.query.distance / req.query.time
        })
    } else if (Number(req.query.time) === 0) {
        res.status(400)
        res.json({
            'distance': req.query.distance,
            'time': req.query.time,
            'speed': 'Incalculable'
        })
        // } else if ((isNaN(req.query.distance))) {
        //     res.status(400)
        //     res.json({
        //         'error': 'can\'t do'
        //     })

    } else {
        res.status(400);
    }
})

let actualCargo = {
    "caliber25": 0,
    "caliber30": 0,
    "caliber50": 0,
    "shipstatus": "empty",
    "ready": false
}

let allAmmo = actualCargo.caliber25 + actualCargo.caliber30 + actualCargo.caliber50
function readyChecker() {
    if (allAmmo === 12500) {
        actualCargo.ready = true;
    }
}

app.get('/rocket', (req, res) => {
    res.send(actualCargo)
})


app.get('/rocket/fill', (req, res) => {
    let caliber = req.query.caliber;
    let amount = Number(req.query.amount)
    // console.log(req.query.amount, actualCargo.caliber25)
    if (caliber == .25) {
        actualCargo.caliber25 += amount
        readyChecker()
        res.send(`ammo received for ${req.query.caliber}`)
    } else if (caliber == .30) {
        actualCargo.caliber30 += amount
        readyChecker()
        res.send(`ammo received for ${req.query.caliber}`)
    } else if (caliber == .50) {
        ctualCargo.caliber50 += amount
        readyChecker()
        res.send(`ammo received for ${req.query.caliber}`)
    }
})

module.exports = app;

