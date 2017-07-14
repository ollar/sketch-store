const functions = require('firebase-functions');
const APP_NAME = 'Cloud Storage for Firebase quickstart';
const gcs = require('@google-cloud/storage')();

const fileBucket = 'sketch-shop.appspot.com';

exports.cleanBlockImage = functions.database.ref('/blocks/{blockId}').onDelete(event => {
  const value = event.data.previous.val();

  if (value && value.type === 'image') {
    const bucket = gcs.bucket(fileBucket);
    bucket.file(value.content.fullPath).delete();
  }
});

exports.cleanImageFile = functions.database.ref('/images/{imageId}').onDelete(event => {
  const value = event.data.previous.val();

  if (value) {
    const bucket = gcs.bucket(fileBucket);
    bucket.file(value.fullPath).delete();
  }
});
