/* eslint-disable no-console */
// Database connection
const { Client } = require('pg');
require('dotenv').config();

const hostp = process.env.SERVER_HOST || 'localhost';

const client = new Client({
  user: 'justin',
  password: 'hackreactor',
  host: hostp,
  port: 5432,
  database: 'projectovernight',
});

module.exports = {
  client,
};

// MongoDB Connection

// const mongoose = require('mongoose');

// const host = process.env.SERVER_HOST || 'localhost';

// mongoose.connect(`mongodb://${host}/projectovernight`, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('err', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Database is connected');
// });

// // Schema
// const roomPhotosSchema = new mongoose.Schema({
//   _id: Number,
//   photos: [{
//     photoId: Number,
//     url: String,
//     description: String,
//     verified: String,
//   }],
// });

// const RoomPhotos = mongoose.model('RoomPhotos', roomPhotosSchema);

// // DB Helpers
// const getPhotosByRoomId = (id, callback) => {
//   RoomPhotos.findOne({ _id: id }, (err, photos) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, photos);
//     }
//   });
// };

// const postPhotosByRoomId = (obj, callback) => {
//   const newRoom = new RoomPhotos(obj);
//   newRoom.save(obj, (err, photos) => {
//     console.log(obj);
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, photos);
//     }
//   });
// };

// const updatePhotosByRoomId = (obj, callback) => {
//   RoomPhotos.updateOne({ _id: obj._id }, obj, (err, photos) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, photos);
//     }
//   });
// };

// const deletePhotosByRoomId = (id, callback) => {
//   RoomPhotos.deleteOne({ _id: id }, (err, photos) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(err, photos);
//     }
//   });
// };

// module.exports = {
//   db,
//   RoomPhotos,
//   getPhotosByRoomId,
//   postPhotosByRoomId,
//   updatePhotosByRoomId,
//   deletePhotosByRoomId,
// };
