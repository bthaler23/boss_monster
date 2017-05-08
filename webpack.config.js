var path = require('path');

module.exports = {
  entry: './game/nexus.js',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
