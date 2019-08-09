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
    { url: "1.jpg", text: "1", moreText: "111" },
    { url: "2.jpg", text: '2', moreText: "222" },
    { url: "3.jpg", text: '3', moreText: "333" },
    { url: "4.jpg", text: '4', moreText: "444" },
    { url: "5.jpg", text: '5', moreText: "555" },
    { url: "6.jpg", text: '6', moreText: "666" },
    { url: "7.jpg", text: "7", moreText: "777" },
    { url: "8.jpg", text: '8', moreText: "888" },
    { url: "9.jpg", text: '9', moreText: "999" }
]


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});

