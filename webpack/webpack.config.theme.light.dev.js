const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.theme.base');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  entry: {
    light: path.join(__dirname, '../semantic-ui', 'index.js'),
  },
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, '../semantic-ui/theme.light.config'),
    },
  },
});
