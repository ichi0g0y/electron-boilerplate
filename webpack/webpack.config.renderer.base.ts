import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import merge from 'webpack-merge';

import * as paths from './paths';
import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  target: 'electron-renderer',
  entry: {
    about: path.join(paths.SRC_RENDERER, 'about.tsx'),
    preference: path.join(paths.SRC_RENDERER, 'preference.tsx'),
    main: path.join(paths.SRC_RENDERER, 'main.tsx'),
  },
  output: {
    path: paths.OUTPUT,
    filename: '[name].js',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [paths.SRC_RENDERER, paths.SRC_SHARED],
        loader: 'ts-loader',
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'asset/font/[hash].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|svg|ico|icns)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: 'asset/image/[hash].[ext]',
        },
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [],
      },
    ],
  },
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: path.resolve(paths.SRC_RENDERER, 'about.html'),
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      filename: 'preference.html',
      template: path.resolve(paths.SRC_RENDERER, 'preference.html'),
      chunks: ['preference'],
    }),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: path.resolve(paths.SRC_RENDERER, 'main.html'),
      chunks: ['main'],
    }),
  ],
});
