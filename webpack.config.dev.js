var common = require('./webpack.config.common');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/entrypoint',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      common.jsLoader,
      common.jsonLoader,
      common.cssLoader,
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('https://api.tumblr.com'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    noCredentials: true,
    port: 8070,
  },
  postcss: common.postcss,
};
