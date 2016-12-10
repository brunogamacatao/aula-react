'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = validate({
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HtmlPlugin({
      title: 'My app',
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ],

  eslint: {
    configFile: path.join(__dirname, 'eslint.dev.js'),
    useEslintrc: false
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style', 'css']
      },
      {
        test: /\.styl$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },

  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components')
    }
  }
});
