var webpack = require('webpack');
require("babel-polyfill");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);

module.exports = {
  entry: [
    "babel-polyfill",
    BUILD_DIR + '/app.js',
    BUILD_DIR + '/css/app.css',
  ],
  output:{
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test:/\.jsx?$/,
        loader: 'babel-loader',
        query: {presets: ['es2015','react','stage-0',]}
      }
    ]
  }
}
