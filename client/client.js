import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'pages/App';
import Index from 'pages/Index';
import Photos from 'pages/Photos';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <App/>
      <Route  path='/' component={Index}/>
      <Route path='/photos' component={Photos}/>
    </Switch>
  </Router>
, document.getElementById('content'));
