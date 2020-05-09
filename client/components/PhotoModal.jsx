import React from 'react';
import PropTypes from 'prop-types';

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

    const carousel = [];
    for (let i = 0; i < photos.length; i += 1) {
      const image = (
        <img src={photos[i].url} alt="" onClick={() => this.selectPhoto(i)} />
      );
      carousel.push(image);
    }

    return (
      <div className="photo-modal">
        <div className="photo-modal-left">
          <div className="left-arrow" onClick={() => this.selectPhoto(selectedPhoto - 1)} role="button" onKeyPress={this.handleKeyPress} tabIndex="0" label="previous" />
        </div>
        <div className="photo-modal-main">
          <img src={photos[selectedPhoto].url} alt="" />
        </div>
        <div className="photo-modal-right">
          <div className="right-arrow" onClick={() => this.selectPhoto(selectedPhoto + 1)} role="button" onKeyPress={this.handleKeyPress} tabIndex="0" label="next" />
          {/* <div className="right-arrow">&#10094;</div> */}
        </div>
        <div className="photo-modal-close">
          <button className="btn exit-icon" type="button" onClick={() => { loadModal(selectedPhoto); }}>&times;</button>
        </div>
        <div className="photo-modal-carousel">
          {/* <img src={photos[selectedPhoto].url} alt="" /> */}
          {carousel}
        </div>
        <div className="photo-modal-text">
          <div className="photo-modal-photonum">
            {photos[selectedPhoto].photoId}
            /
            {photos.length}
          </div>
          <div className="photo-modal-desc">
            {photos[selectedPhoto].description}
          </div>
          <div className="photo-modal-verified">
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
