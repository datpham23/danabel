import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from 'pages/App';
import IndexPage from 'pages/IndexPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute name='index' component={IndexPage} />
    </Route>
  </Router>
, document.getElementById('content'));
