import React from 'react';
import $ from 'jquery';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: '10', // this is a placeholder to test retrieval of record 10
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
          roomId: res._id,
          photos: res.photos,
        });
      });
  }

  render() {
    const { roomId, photos } = this.state;
    let showPhotos;
    if (JSON.stringify(photos) !== '{}') {
      showPhotos = <img src={photos[0].url} />;
    } else {
      showPhotos = <a href='#' onClick={this.getPhotosById}> Record 10 </a>;
    }

    return (
      <div>
        {showPhotos}
      </div>
    );
  }
}

export default PhotoBanner;
