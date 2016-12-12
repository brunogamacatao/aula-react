/**
 *   Copyright 2017 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

'use strict';

const webpack = require('webpack');
const validate = require('webpack-validator');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = validate({
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name]-[hash].js'
  },

  plugins: [
    new HtmlPlugin({
      title: 'My app',
      template: path.join(__dirname, '../src', 'html', 'template.html')
    })
  ],

  eslint: {
    configFile: path.join(__dirname, './eslint.core.js'),
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
