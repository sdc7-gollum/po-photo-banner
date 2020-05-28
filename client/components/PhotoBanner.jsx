import React from 'react';
import $ from 'jquery';
import PhotoGrid from './PhotoGrid';
import PhotoModal from './PhotoModal';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    // const urlId = new URL(document.location).searchParams.get('id');
    const urlId = window.location.href.split('?')[1];

    this.state = {
      roomId: (urlId || '100000000'),
      // LOCAL TEST DATA
      photos: [
        {
          photoId: 1,
          url: 'https://img.bleacherreport.net/img/images/photos/003/839/680/hi-res-6f7b3b6c504827438c2228c3c4beffac_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top',
          description: 'The GOAT',
          verified: 'Photo verified by NFL RECORDS',
        },
        {
          photoId: 2,
          url: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/saints/s4tgmv0pmypkdbu15emj',
          description: 'WHO DAT?!',
          verified: '',
        },
        {
          photoId: 3,
          url: 'https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.bizneworleans.com/content/uploads/2020/05/67554422_2381323408641958_4373150827662016512_o.jpg',
          description: 'GAME TIME',
          verified: 'Photo verified by Saints Photography',
        },
        {
          photoId: 4,
          url: 'https://www.fox8live.com/resizer/IPo83ldMrmFSpPJ7xzDBmSqY2Bg=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/I7DVFR7S3BAKPGVUQHCPSKYO6U.jpg',
          description: 'AK',
          verified: 'Photo verified by NFL FILMS',
        },
        {
          photoId: 5,
          url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Super_Bowl_XLIV_logo.svg/1200px-Super_Bowl_XLIV_logo.svg.png',
          description: 'CHAMPIONS',
          verified: 'Photo verified by the National Football League',
        },
        {
          photoId: 6,
          url: 'https://media.masslive.com/sports_impact/photo/super-bowl-football-45e84d6dbf8b7845.jpg',
          description: 'COACH!',
          verified: '',
        },
        {
          photoId: 7,
          url: 'https://arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/J4KXIGKHYNE6ZPPGGVZFNQF6JQ.jpg',
          description: 'RECORD BREAKER',
          verified: 'Photo verified by @cantguardmike',
        },
        {
          photoId: 8,
          url: 'https://usatftw.files.wordpress.com/2019/01/ap-rams-saints-football-1-1-e1548075457317.jpg?w=1000&h=600&crop=1',
          description: 'REFFING UNBELIEVABLE',
          verified: '',
        },
        {
          photoId: 9,
          url: 'https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2020/01/gettyimages-1197713152-e1578260866843.jpg?w=560&h=316&crop=1',
          description: 'Shafted Again',
          verified: 'Photo verified by The Booth in New York',
        },
        {
          photoId: 10,
          url: 'https://www.contextive.org/wp-content/uploads/2018/01/img_1136.jpg',
          description: '$%#@ Minnesota',
          verified: 'Photo verified by NFL FILMS',
        },
        {
          photoId: 11,
          url: 'https://media.wwltv.com/assets/WWL/images/0fa68347-b36e-47c0-a53d-bebed7abf17d/0fa68347-b36e-47c0-a53d-bebed7abf17d_360x203.png',
          description: 'CLOWN GOODELL',
          verified: 'Photo verified by ESPN',
        },
        {
          photoId: 12,
          url: 'https://i.ytimg.com/vi/KAcKcX90D-8/maxresdefault.jpg',
          description: 'One More Run',
          verified: 'Photo verified by Instagram',
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
