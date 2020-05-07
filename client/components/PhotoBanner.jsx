import React from 'react';
import $ from 'jquery';
import PhotoGrid from './PhotoGrid';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    const urlId = window.location.href.split('?')[1];

    // for testing, record 10 (9 photos) || 5 (3 photos)
    this.state = {
      roomId: (urlId || '10'),
      photos: [],
    };

    this.getPhotosById = this.getPhotosById.bind(this);
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

  render() {
    const { roomId, photos } = this.state;
    let showPhotos;
    if (photos.length > 0) {
      showPhotos = <PhotoGrid roomId={roomId} photos={photos} />;
    } else {
      showPhotos = (
        <a href="#" onClick={this.getPhotosById}>
          Record
          {roomId}
        </a>
      );
    }

    return (
      <div>
        {showPhotos}
      </div>
    );
  }
}

export default PhotoBanner;
