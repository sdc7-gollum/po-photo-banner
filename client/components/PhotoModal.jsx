import React from 'react';
import PropTypes from 'prop-types';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPhoto: this.props.selectedPhoto,
    };
  }

  render() {
    const { loadModal, photos } = this.props;
    return (
      <div className="photo-modal">
        <div>
          <button className="cover-button photo-modal-close" type="button" onClick={() => { loadModal(); }}>&times;</button>
        </div>
        <div className="photo-modal-img">
          <img src="https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg" />
        </div>
        <div className="photo-modal-img">
          PLACEHOLDER FOR PHOTO SELECTOR
        </div>
        <div className="photo-modal-text">
          <div className="photo-modal-photonum">
            {photos[0].photoId}
            /
            {photos.length}
          </div>
          <div className="photo-modal-desc">
            {photos[0].description}
          </div>
          <div className="photo-modal-verified">
            {photos[0].verified}
          </div>
        </div>
      </div>
    );
  }
}

PhotoModal.propTypes = {
  loadModal: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PhotoModal;
