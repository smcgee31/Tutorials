const express   = require('express');
const converter = require('./converter');
const app       = express();
const PORT      = 3000;

app.get('/rgbToHex', (req, res, next) => {

  const red   = parseInt(req.query.red, 10);
  const green = parseInt(req.query.green, 10);
  const blue  = parseInt(req.query.blue, 10);

  const hex = converter.rgbToHex(red, green, blue);

  res.send(hex);

});

app.get('/hexToRgb', (req, res, next) => {

  const hex = req.query.hex;

  const rgb = converter.hexToRgb(hex);

  res.send(JSON.stringify(rgb));

});

app.listen(PORT);
console.log( `server running on port ${PORT}` );