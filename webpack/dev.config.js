var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static/dist');



module.exports = {
  target: 'web',
  devtool: 'eval-source-map',
  context: path.resolve(__dirname, '..'),
  entry: {
    'main': [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './client/client.js'
    ],
  },
  output: {
    path: assetsPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include:  [
          path.resolve(__dirname, '..','client'),
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include:  path.resolve(__dirname, '..','client'),
        exclude: [
          /vendor/
        ],
        query : {
         configFile: '.eslintrc',
         failOnError : false,
         failOnWarning : false
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve(__dirname,'..', 'node_modules')
                ]
            }
          }
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit:10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      },
      {
        test: /\.png|jpg|jpeg|gif/,
        loader: 'url-loader',
        options: {
          limit:10240
        },
      }
    ]
  },
  resolve: {
    modules: [
      'client',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/)
  ]
};
