require('dotenv').config({silent : false});
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import favicon from 'serve-favicon';
import path from 'path';
import bodyParser from 'body-parser';
import Express from 'express';
import http from 'http';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Html from './Html';

const {env} = process;
const app = new Express();
let server = http.createServer(app);


app.use(helmet());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use((err, req, res, next)=>{
  if (err.code !== 'EBADCSRFTOKEN')
    return next(err);
  res.status(403);
  res.send('Invalid CSRF Token');
});
app.use(cors({origin : true}));
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

if(env.NODE_ENV === 'development'){
  const compiler = require('webpack')(require('../webpack/dev.config'));
  app.use(require('webpack-dev-middleware')(compiler, {
    quiet: false,
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: '/dist',
    stats: {
      chunks: false,
      colors: true,
      assets: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use('/BugCentralService', (req, res) => {
    httpProxy.web(req, res, {target: config.bugCentralApiHost});
  });
} else app.use(Express.static(path.join(__dirname, '..', 'static'),{ maxAge: 31556900 }));


app.get('/',  (req, res)=>{
  res.send('<!doctype html>\n' +
    ReactDOM.renderToString(<Html/>));
});


server.listen(env.PORT, err=> {
  if (err) console.error(err);
});
