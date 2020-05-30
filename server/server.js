/* eslint-disable no-console */
require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dbfile = require('../db/database.js');

const connection = dbfile.client.connect();

connection
  .then(() => console.log('Connection To Database Successful!'))
  .catch((e) => console.log(e, 'Sorry We Could Not Connect You To The Database'));

const host = process.env.SERVER_HOST || '127.0.0.1';
const port = process.env.SERVER_PORT || '9000';

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

// HTTP HANDLERS

app.get('/api/photos/:id', (req, res) => {
  const start = Number(req.params.id);
  const end = start + 1;
  dbfile.client.query(`SELECT * FROM pophotos WHERE photos_id BETWEEN ${start} and ${end}`)
    .then((results) => {
      const photoArray = [];
      let counter = 1;
      results.rows.forEach((rec) => {
        rec = {
          photoId: counter, url: rec.url, description: rec.description, verified: rec.verified,
        };
        photoArray.push(rec);
        counter++;
      });
      const shapeData = {
        _id: start,
        photos: photoArray,
      };
      res.status(201).send(shapeData);
    })
    .catch(() => { res.status(400).send('Could Not Get Data'); });
});

app.post('/api/photos/:id', (req, res) => {
  const start = Number(req.params.id);
  const { photoId } = req.body;
  const { photo } = req.body;
  const { description } = req.body;
  const { verified } = req.body;
  dbfile.client.query(`INSERT INTO pophotos (record_id, photos_id, url, description, verified)
  VALUES (${start}, ${photoId}, ${photo}, ${description}, ${verified});`)
    .then(() => {
      res.status(201).send('Posted');
    })
    .catch(() => { res.status(400).send('Could Not Post Data'); });
});


// HTTP Handlers Mongo Setup

// app.get('/api/photos/:id', (req, res) => {
//   dbfile.getPhotosByRoomId(req.params.id, (err, result) => {
//     if (err) {
//       res.status(400).json(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// app.post('/api/photos/:id', (req, res) => {
//   dbfile.postPhotosByRoomId(req.body, (error, result) => {
//     if (error) {
//       res.status(400).json(error);
//     } else {
//       res.status(201).json(result);
//     }
//   });
// });

// app.put('/api/photos/:id', (req, res) => {
//   dbfile.updatePhotosByRoomId(req.body, (error, result) => {
//     if (error) {
//       res.status(400).json(error);
//     } else {
//       res.status(201).json(result);
//     }
//   });
// });

// app.delete('/api/photos/:id', (req, res) => {
//   dbfile.deletePhotosByRoomId(req.params.id, (error, result) => {
//     if (error) {
//       res.status(400).json(error);
//     } else {
//       res.status(201).json(result);
//     }
//   });
// });
