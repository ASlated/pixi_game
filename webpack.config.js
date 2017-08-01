var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, 'js'),
        loader: 'babel-loader',
        query: { presets: 'es2015' },
      }
    ]
  }
};
