require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getData = require('./getData');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('dist'));

// Create trip data
app.post('/trip', async(req, res) => {
    try {
        const destination = encodeURI(req.body.input);
        const data = await getData(destination);
        res.send(data);
    } catch (err) {
        console.error(err);
    }
});

module.exports = app;