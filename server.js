/* eslint-disable */
var express = require('express');
var path = require('path');

const { PORT = 8080, LOCAL_ADDRESS = '0.0.0.0' } = process.env;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, LOCAL_ADDRESS, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
