import React from 'react';
import PropTypes from 'prop-types';

function PhotoGrid({ photos, loadModal }) {
  // Load up to 5 photos for photo cover
  const maxPhotos = photos.length < 5 ? photos.length : 5;
  const coverPhotos = [
    <div className="cover-item cover-item-main" key="0">
      <img src={photos[0].url} alt="" />
    </div>,
  ];

  if (photos.length > 1) {
    for (let i = 1; i < maxPhotos; i += 1) {
      coverPhotos.push(
        <div className="cover-item" key={i}>
          <img src={photos[i].url} alt="" />
        </div>,
      );
    }
  }

  return (
  // LINKS FOR RECORDS FROM DB, USING S3 FILES
    <div className="cover-grid">
      {coverPhotos}
      <div className="view-photos">
        <button className="cover-button" type="button" onClick={() => { loadModal(); }}>View Photos</button>
      </div>
    </div>

  // LINKS USED WHILE IN DEV
  // <div className="cover-grid">
  //   <div className="cover-item cover-item-main">
  //     {/* <a className="coverlink" href="#" target="_self"></a> */}
  //     <img src="https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg" alt="" />
  //   </div>
  //   <div className="cover-item">
  //     <img src="https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg" alt="" />
  //   </div>
  //   <div id="cover" className="cover-item">
  //     <img src="https://38.media.tumblr.com/d71937fbafee6034223655109b7ef290/tumblr_n344pe5wDU1siudrpo4_1280.jpg" alt="" />
  //   </div>
  //   <div className="cover-item">
  //     <img
  //       src="https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640"
  //       alt=""
  //     />
  //   </div>
  //   <div className="cover-item">
  //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU" alt="" />
  //   </div>

  //   <div className="view-photos">
  //     <button className="cover-button" type="button" onClick={ () => { loadModal(); }}>
  //        View Photos
  //     </button>
  //   </div>
  // </div>
  );
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadModal: PropTypes.func.isRequired,
};

export default PhotoGrid;
