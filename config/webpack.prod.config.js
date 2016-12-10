'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = validate({
  entry: path.join(__dirname, '../src', 'index'),

  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlPlugin({
      title: 'My app',
      template: path.join(__dirname, '../src', 'html', 'template.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  eslint: {
    configFile: path.join(__dirname, './eslint.dev.js'),
    useEslintrc: false
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loader: ExtractTextPlugin.extract('style', 'css')
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
      src: path.join(__dirname, '../src'),
      components: path.join(__dirname, '../src', 'components')
    }
  }
});
