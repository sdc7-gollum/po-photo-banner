/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dbfile = require('../db/database.js');

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
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.urlencoded());

// HTTP Handlers
app.get('/api/photos/:id', (req, res) => {
  dbfile.getPhotosByRoomId(req.params.id, (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.post('/api/photos/:id', (req, res) => {
  dbfile.postPhotosByRoomId(req.body, (error, result) => {
    if (error) {
      res.status(400).json(error);
    } else {
      res.status(201).json(result);
    }
  });
});

app.put('/api/photos/:id', (req, res) => {
  dbfile.updatePhotosByRoomId(req.body, (error, result) => {
    if (error) {
      res.status(400).json(error);
    } else {
      res.status(201).json(result);
    }
  });
});

app.delete('/api/photos/:id', (req, res) => {
  dbfile.deletePhotosByRoomId(req.params.id, (error, result) => {
    if (error) {
      res.status(400).json(error);
    } else {
      res.status(201).json(result);
    }
  });
});
