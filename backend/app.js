const express = require('express');
const app = express();
const port = 9004;


app.get('/', (req, res) => {
    res.send('hello friend')
})

app.listen(port, () => {
    console.log(`example app running on ${port}`)
})