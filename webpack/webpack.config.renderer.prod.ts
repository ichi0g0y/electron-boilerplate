import TerserPlugin from 'terser-webpack-plugin';
import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

import baseConfig from './webpack.config.renderer.base';

export default merge.smart(baseConfig, {
  mode: 'production',
  devtool: false,
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new TerserPlugin({
      terserOptions: {
        compress: { drop_console: true },
      },
    }),
  ],
});
