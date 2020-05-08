import React from 'react';
import $ from 'jquery';
import PhotoGrid from './PhotoGrid';
import PhotoModal from './PhotoModal';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    const urlId = window.location.href.split('?')[1];

    // for testing, record 10 (9 photos) || 5 (3 photos)
    this.state = {
      roomId: (urlId || '10'),
      photos: [],
      isModalActive: false,
      selectedPhoto: 0,
    };

    this.getPhotosById = this.getPhotosById.bind(this);
    this.loadModal = this.loadModal.bind(this);
  }

  componentDidMount() {
    this.getPhotosById();
  }

  getPhotosById() {
    const { roomId } = this.state;
    $.ajax({
      method: 'GET',
      url: `/api/photos/${roomId}`,
    })
      .done((res) => {
        this.setState({
          /* eslint no-underscore-dangle: ["error", {"allow": ["_id"]}] */
          roomId: res._id,
          photos: res.photos,
        });
      });
  }

  loadModal() {
    const { isModalActive } = this.state;
    this.setState({
      isModalActive: !isModalActive,
    });
  }

  render() {
    const {
      roomId, photos, isModalActive, selectedPhoto,
    } = this.state;

    let showPhotos;
    if (isModalActive) {
      // if modal is activated, show the modal
      showPhotos = (
        <PhotoModal loadModal={this.loadModal} photos={photos} selectedPhoto={selectedPhoto} />
      );
    } else if (photos.length === 0) {
      // placeholder to add image mimicking google sheets faux-view onload
      showPhotos = <img src="https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg" alt="" />;
    } else {
      // if state has photos, show the photo grid
      showPhotos = <PhotoGrid roomId={roomId} photos={photos} loadModal={this.loadModal} />;
    }

    return (
      <div>
        {showPhotos}
      </div>
    );
  }
}

export default PhotoBanner;
