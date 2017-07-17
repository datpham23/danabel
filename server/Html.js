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
          <script dangerouslySetInnerHTML={{
            __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-102638579-1', 'auto');
              ga('send', 'pageview');
            `
          }} charSet='UTF-8'
          />
          <script src={'dist/main.js'} charSet='UTF-8'/>
        </body>
      </html>
    );
  }
}
