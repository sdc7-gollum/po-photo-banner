import React from 'react';
import PropTypes from 'prop-types';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // selectedPhoto: this.props.selectedPhoto,
    };
  }

  render() {
    const { loadModal, photos, selectedPhoto } = this.props;
    return (
      <div className="photo-modal">
        <div className="photo-modal-left" />
        <div className="photo-modal-main">
          <img src={photos[selectedPhoto].url} alt="" />
        </div>
        <div className="photo-modal-right">
          <button className="btn photo-modal-close" type="button" onClick={() => { loadModal(); }}>&times;</button>
        </div>
        <div className="photo-modal-slider">
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
  selectedPhoto: PropTypes.number.isRequired,
};

export default PhotoModal;
