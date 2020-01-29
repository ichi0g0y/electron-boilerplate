import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';

import * as paths from './paths';
import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: paths.SRC_MAIN,
  },
  output: {
    path: paths.OUTPUT,
    filename: '[name].js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [paths.SRC_MAIN, paths.SRC_SHARED],
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.join(paths.ROOT, '/static'),
        to: path.join(paths.ROOT, '/app/static'),
        ignore: ['.*'],
      },
      {
        from: path.join(paths.ROOT, '/node_modules/about-window/about.html'),
        to: path.join(paths.ROOT, '/app/about'),
      },
      {
        from: path.join(paths.ROOT, '/node_modules/about-window/src/renderer.js'),
        to: path.join(paths.ROOT, '/app/about/src/renderer.js'),
      },
      {
        from: path.join(paths.ROOT, '/node_modules/about-window/styles'),
        to: path.join(paths.ROOT, '/app/about/styles'),
        ignore: ['.*'],
      },
    ]),
  ],
});
