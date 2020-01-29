import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';
import merge from 'webpack-merge';

import * as paths from './paths';
import baseConfig from './webpack.config.renderer.base';

export default merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  cache: true,
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [paths.SRC_RENDERER, paths.SRC_SHARED],
        use: [
          { loader: 'react-hot-loader/webpack' },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      workers: 1,
      memoryLimit: 2048,
      useTypescriptIncrementalApi: true,
      tsconfig: paths.TS_CONFIG,
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  devServer: {
    port: 3000,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
  },
});
