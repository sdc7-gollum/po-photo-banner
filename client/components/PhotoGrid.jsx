import React from 'react';
import PropTypes from 'prop-types';

function PhotoGrid({ photos, loadModal }) {
  // Load up to 5 photos for photo cover
  const maxPhotos = photos.length < 5 ? photos.length : 5;
  const coverPhotos = [
    <div className="cover-item cover-item-main" key="0">
      <img src={photos[0].url} alt="" onClick={() => { loadModal(0); }} />
    </div>,
  ];

  if (photos.length > 1) {
    for (let i = 1; i < maxPhotos; i += 1) {
      coverPhotos.push(
        <div className="cover-item" key={i}>
          <img src={photos[i].url} alt="" onClick={() => { loadModal(i); }} />
        </div>,
      );
    }
  }

  return (
    <div className="cover-grid">
      {coverPhotos}
      <div className="view-photos">
        <button className="btn cover-button" type="button" onClick={() => { loadModal(0); }}>View Photos</button>
      </div>
    </div>
  );
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadModal: PropTypes.func.isRequired,
};

export default PhotoGrid;
