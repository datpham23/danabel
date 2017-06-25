import React, {Component} from 'react';


export default class Html extends Component {
  render() {
    return (
      <html lang='en-us'>
        <head>
          <link rel='shortcut icon' href='favicon.ico'/>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta charSet='UTF-8'/>
        </head>
        <body>
          <div id='content'/>
          <script src={`dist/main.js`} charSet='UTF-8'/>
        </body>
      </html>
    );
  }
}
