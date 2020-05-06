import React from 'react';

//TODO: Prop-types validation
function PhotoGrid({ roomId, photos }) {

  // let coverPhotos = () => {
  //   for (let i = 0; i < 5; i += 1) {
  //     <img src={photos[i].url} alt="" />;
  //   }
  // };

  return (
    <div className="cover-grid">
      <div className="cover-item cover-item-main">
        <img src="https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg" alt="" />
      </div>
      <div className="cover-item">
        <img src="https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg" alt="" />
      </div>
      <div className="cover-item">
        <img src="https://lh3.googleusercontent.com/proxy/P0Zfb9jJTOTc_F7W-8aDA5AZDZjYvIJwkiPCHCS1J7JfhSgsTmHba9q_BUzs3bf8aWwMY0IVjJGvavgFflnPdHATf1TLDPJRp6v8BX1Nl767g8iGxgOKL_JB31V-mqAKGA" alt="" />
      </div>
      <div className="cover-item">
        <img src="https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640
" alt="" />
      </div>
      <div className="cover-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU" alt="" />
      </div>
    </div>
  );
}

export default PhotoGrid;

  // processAjaxPhotos(ajaxRes) {
  //   console.log('photosfn', ajaxRes);
  //   // photosRes.map((photo) => <Photo key={photo.photoId} photo={photo} />);
  //   // <PhotoGrid photos={photosRes} />
  // }
