const express = require('express');

const config = require('./config.json');

const GoogleSearch = require('google-search');
const googleSearch = new GoogleSearch({
  key: config.googleSearchKey,
  cx: config.googleSearchCx
});

const app = express();

const PORT = process.env.PORT || 8000;

require('./app/routes')(app, googleSearch);

app.listen(PORT, () => {
  console.log(`We\'re live on ${ PORT } `);
});
