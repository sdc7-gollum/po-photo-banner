// Database connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project-overnight', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected');
});

//Schema
var photosSchema = new mongoose.Schema({
  _id: Number,
  photos: [{
    photoId: Number,
    url: String,
    description: String,
    verified: { type: Boolean, default: false}
  }]
});

