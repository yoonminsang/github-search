const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 9000,
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'https://api.github.com/',
        changeOrigin: true,
        pathRewrite: { '/api': '/' },
      },
    },
  },
});
