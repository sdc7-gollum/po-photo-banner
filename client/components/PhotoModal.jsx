import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
    const { selectedPhoto } = this.props;

    this.state = {
      selectedPhoto,
    };
  }

  selectPhoto(photoIndex) {
    const { photos } = this.props;
    let index = photoIndex;
    if (photoIndex < 0) {
      index = photos.length - 1;
    }
    if (photoIndex === photos.length) {
      index = 0;
    }

    this.setState({
      selectedPhoto: index,
    });
  }

  render() {
    const { loadModal, photos } = this.props;
    const { selectedPhoto } = this.state;

    // Create the photo carousel with styling
    const carousel = [];
    for (let i = 0; i < photos.length; i += 1) {
      const image = (
        <button type="button" className={styles.btnwrapper2} onClick={() => this.selectPhoto(i)}>
          <img src={photos[i].url} alt="" className={selectedPhoto === i ? styles.photoSelected : styles.photoUnselected} />
        </button>
      );
      carousel.push(image);
    }

    return (
      <div className={styles.photoModal}>

        {/* Modal controls */}
        <div className={styles.photoModalClose}>
          <button className={`${styles.btn} ${styles.exitIcon}`} type="button" onClick={() => { loadModal(selectedPhoto); }}>&times;</button>
        </div>
        <div className={styles.photoModalLeft}>
          <button className={styles.btnwrapper2} type="button" onClick={() => this.selectPhoto(selectedPhoto - 1)}>
            <div className={styles.leftArrow} />
          </button>
        </div>
        <div className={styles.photoModalMain}>
          <img src={photos[selectedPhoto].url} alt="" />
        </div>
        <div className={styles.photoModalRight}>
          <button className={styles.btnwrapper2} type="button" onClick={() => this.selectPhoto(selectedPhoto + 1)}>
            <div className={styles.rightArrow} />
          </button>
        </div>

        {/* Photo Carousel */}
        <div className={styles.photoModalCarousel}>
          {carousel}
        </div>

        {/* Photo Details Text */}
        <div className={styles.photoModalText}>
          <div className={styles.photoModalPhotonum}>
            {photos[selectedPhoto].photoId}
            &nbsp;/&nbsp;
            {photos.length}
          </div>
          <div className={styles.photoModalDesc}>
            {photos[selectedPhoto].description}
          </div>
          <div className={styles.photoModalVerified}>
            {photos[selectedPhoto].verified}
          </div>
        </div>

      </div>
    );
  }
}

PhotoModal.propTypes = {
  loadModal: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedPhoto: PropTypes.number.isRequired,
};

export default PhotoModal;
