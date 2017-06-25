import express from 'express';
import ReactDOM from 'react-dom/server';
import React from 'react';
import Html from '../Html';
import envVariables from '../utils/envVariables';

var router = express.Router();

router.get('/',  (req, res)=>{
  res.send('<!doctype html>\n' +
    ReactDOM.renderToString(<Html user={req.user} env={envVariables} csrfToken={req.csrfToken()}/>));
});


export default router;
