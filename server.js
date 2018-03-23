const express = require('express');
const cors = require('cors');

const config = require('./config.json');

const GoogleSearch = require('google-search');
const googleSearch = new GoogleSearch({
  key: config.googleSearchKey,
  cx: config.googleSearchCx
});

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8000;

require('./app/routes')(app, googleSearch);

app.listen(PORT, () => {
  console.log(`We\'re live on ${ PORT } `);
});
