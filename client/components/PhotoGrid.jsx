import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

function PhotoGrid({ photos, loadModal }) {
  // Load up to 5 photos for photo cover
  const maxPhotos = photos.length < 5 ? photos.length : 5;
  const coverPhotos = [
    <button type="button" className={`${styles.coverItem} ${styles.coverItemMain}`} onClick={() => { loadModal(0); }}>
      <img src={photos[0].url} alt="" />
    </button>,
  ];
  if (photos.length > 1) {
    for (let i = 1; i < maxPhotos; i += 1) {
      coverPhotos.push(
        <button type="button" className={`${styles.coverItem} ${styles[`cover${i}`]}`} onClick={() => { loadModal(i); }}>
          <img src={photos[i].url} alt="" />
        </button>,
      );
    }
  }

  // choose grid based on number of photos
  const gridClass = `${styles.coverGrid} ${styles[`grid${maxPhotos}`]}`;

  return (
    <div className={gridClass}>
      {coverPhotos}
      <div class={styles.viewPhotos}>
        <button className={`${styles.btn} ${styles.coverButton}`} type="button" onClick={() => { loadModal(0); }}>View Photos</button>
      </div>
    </div>
  );
}

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadModal: PropTypes.func.isRequired,
};

export default PhotoGrid;
