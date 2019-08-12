const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.static('static'));
app.use(express.static('images'));

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const forecasts = [
    {
        city: 'Seattle',
        location: 'Washington, United States',
        weather: [
            { temp: 11, icon: 'cloudy.png', message: 'Complete Grey' },
            { temp: 11, icon: 'cloudy.png', message: 'Just stay in bed.' },
            { temp: 13, icon: 'cloudy.png', message: 'Meh...' },
            { temp: 12, icon: 'cloudy.png', message: 'Still meh...' },
            { temp: 13, icon: 'partly_cloudy.png', message: 'Not too sunny.' },
        ],
    },
    {
        city: 'Miami',
        location: 'Florida, United States',
        weather: [
            { temp: 33, icon: 'sunny.png', message: 'Hot.' },
            { temp: 35, icon: 'sunny.png', message: 'Too hot!' },
            { temp: 34, icon: 'sunny.png', message: 'Sunny.' },
            { temp: 34, icon: 'sunny.png', message: 'Beach time!' },
            { temp: 35, icon: 'sunny.png', message: 'Here comes the sun.' },
        ],
    },
    {
        city: 'Barcelona',
        location: 'Spain',
        weather: [
            { temp: 19, icon: 'sunny.png', message: 'Sunny.' },
            { temp: 15, icon: 'partly_cloudy.png', message: 'Not too sunny.' },
            { temp: 17, icon: 'sunny.png', message: 'So far so good.' },
            { temp: 16, icon: 'rainy.png', message: 'Rihanna - Umbrella' },
            { temp: 18, icon: 'sunny.png', message: 'Here comes the sun.' },
        ],
    },
    {
        city: 'London',
        location: 'United Kingdom',
        weather: [
            { temp: 4, icon: 'snowy.png', message: 'Go home winter.' },
            { temp: 7, icon: 'rainy.png', message: 'Do you have an umbrella?' },
            { temp: 10, icon: 'rainy.png', message: 'It\'s rainy.' },
            { temp: 9, icon: 'rainy.png', message: 'Meh...' },
            { temp: 11, icon: 'rainy.png', message: 'Meh... Again.' },
        ],
    },
    {
        city: 'Budapest',
        location: 'Hungary',
        weather: [
            { temp: 12, icon: 'partly_cloudy.png', message: 'It\'s cloudy.png.' },
            { temp: 16, icon: 'rainy.png', message: 'Sooo... Wet.' },
            { temp: 18, icon: 'partly_cloudy.png', message: 'Here comes the sun.' },
            { temp: 16, icon: 'partly_cloudy.png', message: 'Not too sunny.' },
            { temp: 19, icon: 'partly_cloudy.png', message: 'So far so good.' },
        ],
    },
];


function citiesDailyWeather(cities){
    let dailyWeather=[];
    for (let i=0 ; i< forecasts.length; i++){
        if (cities === forecasts[i].city)
        dailyWeather=forecasts[i].weather;
    }
    return dailyWeather;
}


app.get('/', (req, res) => {
    let citiesToDisplay = [];
    for (let i = 0; i < forecasts.length; i++) {
        if (req.query.cities === forecasts[i].city) {
            citiesToDisplay.push(forecasts[i])
        }
    } if (citiesToDisplay[0] === undefined) {
        res.render('home', { dashBoard: forecasts });
    } else {
        res.render('details', { city: `${req.query.cities}`,dailyBoard: citiesDailyWeather(req.query.cities),  });
    }
});

app.get

