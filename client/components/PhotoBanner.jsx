import React from 'react';
import $ from 'jquery';
import PhotoGrid from './PhotoGrid';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: '5', // this is a placeholder to test retrieval of record 10 (9 photos) || 5 (3 photos)
      photos: {},
    };

    this.getPhotosById = this.getPhotosById.bind(this);
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
    if (JSON.stringify(photos) !== '{}') {
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
