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
    { url: "1.jpg", text: "Kung fu Panda", moreText: "The kung fu Panda who will beat everyone up!" },
    { url: "2.jpg", text: 'Fun Panda', moreText: "The fun Panda gives no shit" },
    { url: "3.jpg", text: 'Cute Panda', moreText: "The cute Panda is not cute" },
    { url: "4.jpg", text: 'Clumsy Panda', moreText: "The clumsy Panda is..well clumsy" },
    { url: "5.jpg", text: 'Angry Panda', moreText: "The angry Panda needs to hakuna their tatas" },
    { url: "6.jpg", text: 'Vegan Panda', moreText: "The vegan Panda can be fat too" },
    { url: "7.jpg", text: "Sith Panda", moreText: "The sith Panda is strong with the force" },
    { url: "8.jpg", text: 'Black and White', moreText: "Will make it right" },
    { url: "9.jpg", text: 'Disappointed Panda', moreText: "Let's do stuff" }
]


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});

