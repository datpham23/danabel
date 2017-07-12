import React, { Component } from 'react';
import '../sass/photos.scss';
import Gallery from 'react-grid-gallery';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images : []
    };
  }

  componentDidMount() {
    (async ()=>{
      let response = await fetch('/gallery/images');
      let images = await response.json();
      this.setState({
        images : images
      });
    })();
  }
  render() {
    let images = this.state.images.map(imageName=>{
      return {
        src: `/images/gallery/${imageName}`,
        thumbnail : `/images/gallery/${imageName}`
      };
    });
    return (
      <div className='photos-page'>
        <div style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          overflow: 'auto'}}
        >
          <Gallery images={images}
            enableLightbox={true}
            enableImageSelection={false}
            showLightboxThumbnails={true}
          />
        </div>
      </div>
    );
  }
}
