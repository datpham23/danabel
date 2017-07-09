import React, { Component } from 'react';
import '../sass/photos.scss';
import Gallery from 'react-grid-gallery';

const images = [];
for (var i=1; i<16; i ++)
  images.push({
    src: `/images/${i}.jpg`,
    thumbnail : `/images/${i}.jpg`
  });


export default class Home extends Component {
  render() {
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
