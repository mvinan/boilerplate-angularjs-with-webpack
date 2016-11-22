var webpack = require('webpack');
var DIR_APP = __dirname + '/app/scripts/';
var DIR_BUILD = __dirname + '/app/scripts/build';

module.exports = {
  entry: DIR_APP,
  output: {
    path: DIR_BUILD,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel" }
    ]
  }
};
