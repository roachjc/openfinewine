const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const wineController = require('./wine/wineController');

mongoose.connect('mongodb://localhost/realtimewine');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../index.html`));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../build/bundle.js`));
});

app.get('/getwines', (req, res) => {
  wineController.getAllWines((err, wines) => {
    if (err) throw err;
    res.json(wines);
  });
});

// setInterval(wineController.populate, 1500);

app.listen(3000, wineController.populate);
