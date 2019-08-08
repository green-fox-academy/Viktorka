const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(express.static('gallery'));

app.get('/', (req, res) => {
    res.render('home', { imageList: imageList });
});


const imageList = [
    { url: "1.jpg" },
    { url: "2.jpg" },
    { url: "3.jpg" },
    { url: "4.jpg" },
    { url: "5.jpg" },
    { url: "6.jpg" },
    { url: "7.jpg" },
    { url: "8.jpg" },
    { url: "9.jpg" }
]

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});