import React from 'react';
import ReactDOM from 'react-dom';

class PhotoBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>I'll eventually evolve into a photo.</div>
    );
  }
}

ReactDOM.render(<PhotoBanner />, document.getElementById('photoBanner'));