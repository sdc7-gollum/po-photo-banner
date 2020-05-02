/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const db = require('../db/database.js');

const host = process.env.SERVER_HOST || '127.0.0.1';
const port = process.env.SERVER_PORT || '9800';

// Server Connection
const app = express();
app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('Error starting up server');
  } else {
    console.log(`Server now hosted on http://${host}:${port}`);
  }
});

app.use(express.static('public'));
app.use(express.urlencoded());

// HTTP Handlers
app.get('/api/photos/:id', (req, res) => {
  db.getPhotosByRoomId(req.params.id, (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});
