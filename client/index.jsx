import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '10', // this is a placeholder to test retrieval of record 10
    };

    this.getPhotosById = this.getPhotosById.bind(this);
  }

  getPhotosById() {
    const { id } = this.state;
    $.ajax({
      method: 'GET',
      url: `/api/photos/${id}`,
    });
    // .done(() => {
    //   // placeholder
    // });
  }

  render() {
    const { id } = this.state;
    const link = `/api/photos/${id}`;
    return (
      <div>
        index.jsx: I will eventually evolve into a photo..
        <p />
        <a href={link} onClick={this.getPhotosById}>Record 10</a>
      </div>
    );
  }
}

ReactDOM.render(<PhotoBanner />, document.getElementById('photoBanner'));
