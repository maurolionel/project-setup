import { resolve } from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from '../webpack.config';
import appConfig from '../configs/config';

new WebpackDevServer(webpack(config), {
  quiet: false,
  noInfo: false,
  compress: true,
  hot: true,
  https: false,
  contentBase: resolve('./', 'dist'),
  publicPath: '/',
  historyApiFallback: true,
  stats: {
    assets: false,
    colors: true,
    version: true,
    chunkModules: false
  }
}).listen(appConfig.clientPort, appConfig.clientDomain, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening at ${appConfig.clientProtocol}://${appConfig.clientDomain}:${appConfig.clientPort}/`);
  }
});

