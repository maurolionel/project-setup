import WebpackConfig from 'webpack-config';

export default new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    devtool: 'source-map',
    entry: ['babel-polyfill', './src/index.jsx'],
    debug: false
  });
