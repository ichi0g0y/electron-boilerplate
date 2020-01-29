const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.theme.base');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  entry: {
    dark: path.join(__dirname, '../semantic-ui', 'index.js'),
  },
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, '../semantic-ui/theme.dark.config'),
    },
  },
});
