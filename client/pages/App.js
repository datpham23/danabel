import React, {Component} from 'react';
import {Link} from 'react-router';
import '../sass/global.scss';

export default class App extends Component {
  render() {
    return (
      <div className='application-container'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <Link to='/index'
                className='nav-item'
                activeClassName='active'
              >
                Details
              </Link>
            </li>
            <li>
              <Link to='/photos'
                className='nav-item'
                activeClassName='active'
              >
                Photos
              </Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
