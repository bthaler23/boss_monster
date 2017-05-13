var path = require('path');

module.exports = {
  entry: './game/boss_monster.js',
  output: {
    filename: './bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
