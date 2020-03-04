import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';

import { dependencies } from '../package.json';

import * as paths from './paths';
import baseConfig from './webpack.config.base';

const externalsExclude: string[] = [];
const externals: string[] = [];
Object.keys(dependencies || {}).forEach(key => {
  if (externalsExclude.indexOf(key) === -1) externals.push(key);
});

export default merge.smart(baseConfig, {
  target: 'electron-main',
  entry: {
    main: paths.SRC_MAIN,
  },
  output: {
    path: paths.OUTPUT,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
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
    ]),
  ],
  externals: [...externals, 'electron'],
});
