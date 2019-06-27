const express = require('express');
const path = require('path');
var multer = require('multer');
const generateCSV = require('./controllers.js');

const app = express();

app.use('/', express.static(path.join(__dirname, '../dist')));

app.post('/csv', multer().single('data'), (req, res) => {
  generateCSV(req, res);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
