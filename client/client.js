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
    <div>
      <App/>
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route path='/photos' component={Photos}/>
      </Switch>
    </div>
  </Router>
, document.getElementById('content'));
