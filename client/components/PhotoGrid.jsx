import React from 'react';

function PhotoGrid(props) {
  console.log(props.photos);
  return (
    <div>
      <img src={props.photos[0].url}></img>
    </div>
  );
}

export default PhotoGrid;

  // processAjaxPhotos(ajaxRes) {
  //   console.log('photosfn', ajaxRes);
  //   // photosRes.map((photo) => <Photo key={photo.photoId} photo={photo} />);
  //   // <PhotoGrid photos={photosRes} />
  // }