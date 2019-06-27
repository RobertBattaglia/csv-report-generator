const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const generateCSV = require('./controllers.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.post('/csv', (req, res) => {
  generateCSV(req);
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
