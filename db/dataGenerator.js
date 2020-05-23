/* eslint-disable no-console */
const fs = require('file-system');

const writePhotos = fs.createWriteStream('photos.csv');
writePhotos.write('i, photoId, url, description, verified\n', 'utf8');

let count = 0;

const photoDesc = [
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

const myPhotos = [];


while (count < 1000) {
  myPhotos.push(`https://i.picsum.photos/id/${count}/800/700.jpg`);
  count += 1;
}


function writeTenMillionPhotoRecords(writer, encoding, callback) {
  let i = 1;
  let clearCount = 0;
  let photoId = 0;
  let photosInRecord = Math.floor(Math.random() * (5) + 5);
  function write() {
    let ok = true;
    do {
      if (photoId === 10) {
        photoId = 0;
      }
      photoId += 1;
      const url = myPhotos[Math.floor(Math.random() * (999 - 0))];
      const description = photoDesc[Math.floor(Math.random() * (20))];
      const verified = verifiedText[Math.floor(Math.random() * (2))];
      const data = `${i},${photoId},${url},${description},${verified}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        photosInRecord -= 1;
        if (photosInRecord === 0) {
          i += 1;
          console.log(i);
          clearCount += 1;
          photoId = 0;
          photosInRecord = Math.floor(Math.random() * (5) + 5);
          if (clearCount >= 50000) {
            clearCount = 0;
            writer.once('drain', write);
          }
        }
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i <= 10000000) {
      writer.once('drain', write);
    }
  }
  write();
}

writeTenMillionPhotoRecords(writePhotos, 'utf-8', () => {
  writePhotos.end();
});
