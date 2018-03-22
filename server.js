const express = require('express');

const config = require('./config.json');

const GoogleSearch = require('google-search');
const googleSearch = new GoogleSearch({
  key: config.googleSearchKey,
  cx: config.googleSearchCx
});

const app = express();

const port = 8000;

require('./app/routes')(app, googleSearch);

app.listen(port, () => {
  console.log('We\'re live on ' + port );
});
