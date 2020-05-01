/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const app = express();
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
  }
});

app.use('/', express.static('public'));
app.use(express.urlencoded());
