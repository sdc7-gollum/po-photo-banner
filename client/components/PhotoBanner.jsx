import React from 'react';
import $ from 'jquery';
import PhotoGrid from './PhotoGrid';
import PhotoModal from './PhotoModal';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    const urlId = window.location.href.split('?')[1];

    this.state = {
      roomId: (urlId || '300'),
      // LOCAL TEST DATA
      photos: [
        {
          photoId: 1,
          url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 2,
          url: 'https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 3,
          url: 'https://38.media.tumblr.com/d71937fbafee6034223655109b7ef290/tumblr_n344pe5wDU1siudrpo4_1280.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 4,
          url: 'https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 5,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 6,
          url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 7,
          url: 'https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 8,
          url: 'https://38.media.tumblr.com/d71937fbafee6034223655109b7ef290/tumblr_n344pe5wDU1siudrpo4_1280.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 9,
          url: 'https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 10,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 11,
          url: 'https://japaneseanimeinfo.up.seesaa.net/image/401-3e556.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 12,
          url: 'https://i.pinimg.com/474x/47/14/f2/4714f2e99aef38240636d17e976f1672.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 13,
          url: 'https://38.media.tumblr.com/d71937fbafee6034223655109b7ef290/tumblr_n344pe5wDU1siudrpo4_1280.jpg',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 14,
          url: 'https://i1.wp.com/www.campus.sg/wp-content/uploads/2016/04/cute-japanese-sweets-wagashi-2__605.jpg?fit=605%2C403&ssl=1&w=640',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
        {
          photoId: 15,
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0BHsoTFWFamidPYmgJeKVyFkWqyQfOFDipGyq6jopL5mRvsbO&usqp=CAU',
          description: 'hello world',
          verified: 'Photo verified by Project Overnight',
        },
      ],
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

  loadModal(selectedPhoto) {
    const { isModalActive } = this.state;
    this.setState({
      isModalActive: !isModalActive,
      selectedPhoto,
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
