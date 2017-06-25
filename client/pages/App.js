import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../sass/global.scss';

export default class App extends Component {
  render() {
    return (
      <div className='application-container'>
        <nav className='nav-bar'>
          <ul>
            <li>
              <NavLink to='/' className='nav-item' activeClassName='active'>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink to='/photos' className='nav-item' activeClassName='active'>
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
