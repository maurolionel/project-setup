import Webpack from 'webpack';
import { resolve } from 'path';
import WebpackConfig from 'webpack-config';

export default new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge({
    bail: true,
    devtool: 'source-map',

    entry: ['babel-polyfill', './src/index.jsx'],

    output: {
      filename: '[name].js?[hash]',
      path: resolve('dist'),
      chunkFilename: '[name].js?[hash]',
      publicPath: '/'
      // necessary for HMR to know where to load the hot update chunks
    },

    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new Webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      })
    ]
  });
