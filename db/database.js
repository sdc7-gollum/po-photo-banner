/* eslint-disable no-console */
// Database connection
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${process.env.SERVER_HOST}/project-overnight`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database is connected');
});

// Schema
const roomPhotosSchema = new mongoose.Schema({
  _id: Number,
  photos: [{
    photoId: Number,
    url: String,
    description: String,
    verified: String,
  }],
});

const RoomPhotos = mongoose.model('RoomPhotos', roomPhotosSchema);

// DB Helpers
const getPhotosByRoomId = (id, callback) => {
  RoomPhotos.find({ _id: id }, (err, photos) => {
    if (err) {
      callback(err);
    } else {
      callback(err, photos);
    }
  });
};

module.exports = {
  RoomPhotos,
  getPhotosByRoomId,
};
