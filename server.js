/* eslint-disable */
var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;
const host = '0.0.0.0';
var app = express();
console.log("i'm listen");

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});