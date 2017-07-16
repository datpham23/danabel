import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory} from 'history';
import App from 'pages/App';
import Index from 'pages/Index';
import IndexMobile from 'pages/IndexMobile';
import Photos from 'pages/Photos';
import {
  Router,
  Route,
  Redirect
} from 'react-router';

const isSmallScreenSize = ()=>{
  return window.innerWidth <= 800;
};

ReactDOM.render(
  <Router history={createHistory()}>
    <Redirect from='/' to='index'/>
    <Route path='/' component={App}>
      <Route path='index' component={isSmallScreenSize()? IndexMobile : Index}/>
      <Route path='photos' component={Photos}/>
    </Route>
  </Router>
, document.getElementById('content'));
