import path from 'path';
import webpack from 'webpack';

import * as paths from './paths';

const config: webpack.Configuration = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(paths.ROOT, 'src', 'shared'),
      '::': path.resolve(paths.ROOT, 'src', 'main'),
      ':': path.resolve(paths.ROOT, 'src', 'renderer'),
    },
  },
};

export default config;
