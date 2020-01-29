import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.main.base';

export default merge.smart(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
