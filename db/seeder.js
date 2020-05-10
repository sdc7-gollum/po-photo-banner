/* eslint-disable no-console */
const database = require('./database');

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
const verifiedText = ['Photo Verified by Project Overnight', ''];
const data = [];

const getRandomPhoto = (numPhotos) => {
  const photoArray = [];
  let photoId = 1;

  for (let i = 0; i < numPhotos; i += 1) {
    const description = photoDesc[Math.floor(Math.random() * Math.floor(photoDesc.length))];
    const verified = verifiedText[Math.floor(Math.random() * Math.floor(verifiedText.length))];
    let url = photoUrl[Math.floor(Math.random() * Math.floor(photoUrl.length))];

    // Exclude photo dupes from randomized photo array
    while (JSON.stringify(photoArray).includes(url)) {
      url = photoUrl[Math.floor(Math.random() * Math.floor(photoUrl.length))];
    }

    const newPhoto = {
      photoId,
      url,
      description,
      verified,
    };
    photoArray.push(newPhoto);
    photoId += 1;
  }
  return photoArray;
};

// Generate x number of records for seeding data
const createSampleData = (startingId, numRecords) => {
  let id = startingId;

  for (let i = 0; i < numRecords; i += 1) {
    // Randomizes photos count choosing min of 1 and max of 16
    const photoArray = getRandomPhoto(Math.floor(Math.random() * (16 - 1) + 1));

    const newRecord = {
      _id: id,
      photos: photoArray,
    };
    data.push(newRecord);
    id += 1;
  }
  console.log(data);
};

// DEV NOTES:
// 1. Manually drop database tables if desired: use projectovernight; db.dropDatabase();
// 2. Enter desired data generating parameters for starting id and number of rooms
createSampleData(2, 129);
database.RoomPhotos.collection.insertMany(data, (err) => {
  if (err) {
    console.log(`Error seeding: ${err}`);
  }
  database.db.close();
});

// Specially curated record (#1) for demo purposes
const demoRoom = {
  _id: 1,
  photos: [
    {
      photoId: 1,
      url: 'https://leileihrr.s3.amazonaws.com/bed001.jpg',
      description: 'Queen Bed',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 2,
      url: 'https://leileihrr.s3.amazonaws.com/decor001.jpg',
      description: '',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 3,
      url: 'https://leileihrr.s3.amazonaws.com/livingroom004.jpg',
      description: 'Living room with fireplace',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 4,
      url: 'https://leileihrr.s3.amazonaws.com/outdoors9.jpg',
      description: '',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 5,
      url: 'https://leileihrr.s3.amazonaws.com/outdoors10.jpg',
      description: 'Private patio',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 6,
      url: 'https://leileihrr.s3.amazonaws.com/decor002.jpg',
      description: '',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 7,
      url: 'https://leileihrr.s3.amazonaws.com/decor005.jpg',
      description: '',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 8,
      url: 'https://leileihrr.s3.amazonaws.com/bath002.jpg',
      description: 'Newly renovated bath',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 9,
      url: 'https://leileihrr.s3.amazonaws.com/bath003.jpg',
      description: 'Newly renovated bath',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 10,
      url: 'https://leileihrr.s3.amazonaws.com/bath004.jpg',
      description: 'Newly renovated bath',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 11,
      url: 'https://leileihrr.s3.amazonaws.com/outdoors8.jpg',
      description: 'Private patio with grill',
      verified: 'Photo Verified by Project Overnight',
    },
    {
      photoId: 12,
      url: 'https://leileihrr.s3.amazonaws.com/outdoors5.jpg',
      description: 'San Francisco',
      verified: 'Photo Verified by Project Overnight',
    },
  ],
};

database.RoomPhotos.collection.insertOne(demoRoom, (err) => {
  if (err) {
    console.log(`Error seeding: ${err}`);
  }
  database.db.close();
});
