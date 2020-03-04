import webpack from 'webpack';

import * as paths from './paths';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': paths.MISC,
      '#': paths.SRC_SHARED,
      '::': paths.SRC_MAIN,
      ':': paths.SRC_RENDERER,
    },
  },
};

export default config;
