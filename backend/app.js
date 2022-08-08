const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 9004;

const todoController = require('./routes/todoController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect('mongodb://localhost/tododb2');

app.get('/', (req, res) => {
    res.send('hello friend')
});

app.use('/todo', todoController);

app.listen(port, () => {
    console.log(`example app running on ${port}`)
});