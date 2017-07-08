import { resolve } from 'path';
import WebpackConfig from 'webpack-config';
import Webpack from 'webpack';
import appConfig from '../configs/config';

export default new WebpackConfig()
  .extend('./webpack/webpack.base.config.js')
  .merge({

    entry: [
      './src/index.js',
      `webpack-dev-server/client/index.js?${appConfig.clientProtocol}://${appConfig.clientDomain}:${appConfig.clientPort}`,
      'webpack/hot/dev-server'
    ],
    context: resolve('./'),

    devtool: 'source-map',

    plugins: [
      new Webpack.LoaderOptionsPlugin({
        debug: true,
        minimize: true
      }),
      new Webpack.HotModuleReplacementPlugin()
    ]
  });
