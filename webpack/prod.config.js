var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var projectRootPath = path.resolve(__dirname, '../');
var assetsPath = path.resolve(projectRootPath, './static/dist');


module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      './client/client.js'
    ],
    'common' : ['react','react-bootstrap'],
    'bootstrap' : './client/theme/bootstrap.config.js',
    'font-awesome' : './client/theme/font-awesome.config.js'
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include:  [
        path.resolve(__dirname, '..','client'),
        './client/theme/bootstrap.config.js',
        './client/theme/font-awesome.config.js'], loaders: ['babel']},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader!autoprefixer-loader?browsers=last 10 version' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!autoprefixer-loader?browsers=last 10 version' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.png|jpg|jpeg/, loader: 'url-loader?limit=10240' }
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'client',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
  plugins: [
    new CommonsPlugin({
      minChunks: 3,
      name: "common"
    }),
    new CleanPlugin([assetsPath], { root: projectRootPath }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },

      __CLIENT__: true,
      __SERVER__: false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false
    }),

    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false},
      sourceMap : false,
      compress: false
    })
  ],
  eslint: {
   configFile: '.eslintrc',
  //  failOnError : true,
  //  failOnWarning : true
  }
};
