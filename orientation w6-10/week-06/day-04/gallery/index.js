const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static('images'));
app.use(express.static('style'));
app.use(express.static('script'));

app.get('/', (req, res) => {
    res.render('home', { imageList: imageList });
});


const imageList = [
    { url: "1.jpg", text: "1" },
    { url: "2.jpg", text: '2' },
    { url: "3.jpg", text: '3' },
    { url: "4.jpg", text: '4' },
    { url: "5.jpg", text: '4' },
    { url: "6.jpg", text: '4' },
    { url: "7.jpg", text: '4' },
    { url: "8.jpg", text: '4' },
    { url: "9.jpg", text: '4' }
]

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});