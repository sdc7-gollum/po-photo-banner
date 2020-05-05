import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    console.log(this.props.photo);
    return (
      <div>
        Photo
        {this.props.photo}
      </div>
    );
  }
}

export default Photo;