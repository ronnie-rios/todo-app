const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 9494;
const blogController = require('./routes/blogController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost/blogzz');

app.get('/', (req, res) => {
    res.send('hello friend')
});

app.use('/blog', blogController);

app.listen(port, () => {
    console.log(`example app running on ${port}`)
});