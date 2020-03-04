const path = require('path');
const paths = { ROOT: path.resolve(__dirname) };

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(paths.ROOT, 'misc'),
      '#': path.resolve(paths.ROOT, 'src', 'shared'),
      '::': path.resolve(paths.ROOT, 'src', 'main'),
      ':': path.resolve(paths.ROOT, 'src', 'renderer'),
    },
  },
};
