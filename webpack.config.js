var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  externals: {
    clappr: 'Clappr',
    'shaka-player': 'shaka'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: { compact: true, } }
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    filename: 'dash-shaka.js',
    library: 'DashShaka',
    libraryTarget: 'umd'
  },
}
