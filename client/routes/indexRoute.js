import React             from 'react';
import {IndexRoute}      from 'react-router';



export default (reducerRegistry)=>{
  const getComponent = (location,cb)=>{
    require(['pages/IndexPage'], (component)=>{
      cb(null,component);
    });
  };

  return (
    <IndexRoute getComponent={getComponent}/>
  );
};
