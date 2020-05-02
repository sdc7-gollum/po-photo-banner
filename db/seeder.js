/* eslint-disable no-console */
const db = require('./database');

// The Data!
// DEV NOTES: Consider using your own urls here. An option is to create urls from files:
// Use Google sheets to concat names to create url and multiline edit to add quotes
const photoUrl = [
  'https://leileihrr.s3.amazonaws.com/livingroom002.jpg',
  'https://leileihrr.s3.amazonaws.com/bath001.jpg',
  'https://leileihrr.s3.amazonaws.com/bath002.jpg',
  'https://leileihrr.s3.amazonaws.com/bath003.jpg',
  'https://leileihrr.s3.amazonaws.com/bath004.jpg',
  'https://leileihrr.s3.amazonaws.com/bath005.jpg',
  'https://leileihrr.s3.amazonaws.com/bath006.jpg',
  'https://leileihrr.s3.amazonaws.com/bed001.jpg',
  'https://leileihrr.s3.amazonaws.com/bed002.jpg',
  'https://leileihrr.s3.amazonaws.com/bed003.jpg',
  'https://leileihrr.s3.amazonaws.com/bed004.jpg',
  'https://leileihrr.s3.amazonaws.com/bed005.jpg',
  'https://leileihrr.s3.amazonaws.com/bed006.jpg',
  'https://leileihrr.s3.amazonaws.com/bed007.jpg',
  'https://leileihrr.s3.amazonaws.com/bed008.jpg',
  'https://leileihrr.s3.amazonaws.com/decor001.jpg',
  'https://leileihrr.s3.amazonaws.com/decor002.jpg',
  'https://leileihrr.s3.amazonaws.com/decor003.jpg',
  'https://leileihrr.s3.amazonaws.com/decor004.jpg',
  'https://leileihrr.s3.amazonaws.com/decor005.jpg',
  'https://leileihrr.s3.amazonaws.com/decor006.jpg',
  'https://leileihrr.s3.amazonaws.com/kitchen001.jpg',
  'https://leileihrr.s3.amazonaws.com/kitchen002.jpg',
  'https://leileihrr.s3.amazonaws.com/kitchen003.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom001.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom003.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom004.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom005.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom006.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom007.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom008.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom009.jpg',
  'https://leileihrr.s3.amazonaws.com/livingroom010.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors001.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors002.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors003.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors4.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors5.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors6.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors7.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors8.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors9.jpg',
  'https://leileihrr.s3.amazonaws.com/outdoors10.jpg',
];
const photoDesc = [
  '',
  'Spacious',
  'Bright',
  'Cheerful',
  'Newly added',
  'Comfortable',
  'Cozy',
  'Ensuite',
  'Lofty',
  'Warm',
  'Roomy for the area',
  'Accessible',
  'Charming',
  'Convenient',
  'Functional',
  'Comfy',
  'Quaint',
  'Soundproof',
  'Renovated',
  'Stylish',
  '',
];
const verifiedOptions = [true, false];
const data = [];

const getRandomPhoto = (numPhotos) => {
  const photoArray = [];
  let photoId = 1;

  for (let i = 0; i < numPhotos; i += 1) {
    const url = photoUrl[Math.floor(Math.random() * Math.floor(photoUrl.length))];
    const description = photoDesc[Math.floor(Math.random() * Math.floor(photoDesc.length))];
    const verified = Math.floor(Math.random() * Math.floor(verifiedOptions.length));
    const verifiedText = verified === 1 ? 'Photo Verified by Project Overnight' : '';

    const newPhoto = {
      photoId,
      url,
      description,
      verified: verifiedText,
    };
    photoArray.push(newPhoto);
    photoId += 1;
  }
  return photoArray;
};

// Generate x number of records for seeding data
const createSampleData = (startingId, numRecords) => {
  let id = startingId;
  // An arbitrary number was chosen for the max in generating random
  // Each UI page can have at max 5 elements so this allows for a small subset of data
  const photoArray = getRandomPhoto(Math.floor(Math.random() * Math.floor(12)));

  for (let i = 0; i < numRecords; i += 1) {
    const newRecord = {
      _id: id,
      photos: photoArray,
    };
    data.push(newRecord);
    id += 1;
  }
  console.log(data);
};

// DEV NOTE: Enter desired data generating parameters
createSampleData(1, 130);

// Load sample data into data array
// Invoke mongoose functions to create a new record for each item from the data array
for (let i = 0; i < data.length; i += 1) {
  db.RoomPhotos.create(data[i], (err) => { if (err) { console.log(err); } });
}
