import React, { Component } from 'react';
import '../sass/index-mobile.scss';

export default class Home extends Component {
  render() {
    return (
      <div className='index-page-mobile'>
        <img src='/images/splash.jpg' width='100%'/>
        <div className='panel'>
          <h2 className='title'>Tea Ceremony</h2>
          <p className='text'>12pm - 2pm</p>
          <address className='text'>
            4957 Collomia Court, San Jose, CA 95111
          </address>
          <p className='text'>&nbsp;</p>
          <div className='map-container'>
            <iframe
              width={window.innerWidth-30}
              height='450'
              frameBorder='0'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCoFEmQcNGqdL19yG1K4JUfQbcOo27Y00U&q=4957+Collomia+Court,+San+Jose,+CA+95111'
              allowFullScreen
            />
          </div>
        </div>
        <div className='panel'>
          <h2 className='title'>Ceremony & Reception</h2>
          <p className='text'>Ceremony: 5pm - 6pm</p>
          <p className='text'>Reception: 7pm - 11pm</p>
          <address className='text'>
            410 Vineyard Ave, Pleasanton, CA 94566
          </address>
          <div className='map-container'>
            <iframe
              width={window.innerWidth-30}
              height='450'
              frameBorder='0'
              src='https://www.google.com/maps/embed/v1/place?key=AIzaSyCoFEmQcNGqdL19yG1K4JUfQbcOo27Y00U&q=410+Vineyard+Ave,+Pleasanton,+CA+94566'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }
}
