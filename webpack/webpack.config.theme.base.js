const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../theme'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'asset/image/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: false,
          mimetype: 'application/font-woff',
          name: 'asset/font/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'asset/font/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader?name=/fonts/[name].[ext]',
        options: {
          mimetype: 'application/font-otf',
          name: 'asset/font/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
