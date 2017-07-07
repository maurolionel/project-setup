import { resolve } from 'path';
import webpack from 'webpack';
import SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import ManifestPlugin from 'webpack-manifest-plugin';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import WebpackConfig from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '../configs/config';

export default new WebpackConfig()
  .merge({
    resolve: {
      extensions: ['.js', '.jsx']
    },

    context: resolve('./'),

    output: {
      filename: '[name].js?[hash]',
      path: resolve('./', 'dist'),
      chunkFilename: '[name].js?[hash]',
      publicPath: './'
    },

    module: {
      rules: [
        {
          test: /\.(js)$/i,
          loader: StringReplacePlugin.replace({
            replacements: [{
              pattern: /__(\w*?)__/ig,
              replacement: (match, p1) => (config[p1])
            }]
          }),
          include: resolve('src/configs')
        },
        {
          test: /\.(js|jsx)$/i,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              ['es2015', { modules: false }],
              'react',
              'stage-3',
              'stage-2'
            ],
            plugins: [
              'transform-object-assign',
              'transform-object-rest-spread',
              'transform-flow-strip-types',
              'syntax-dynamic-import'
            ]
          }
        },
        {
          test: /\.(eot|ttf|svg|woff|otf|woff2)$/i,
          include: resolve('./', 'src/assets/fonts'),
          loader: 'file-loader?name=[path][name].[ext]&limit=1000'
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: /node_modules/,
          include: resolve('src/assets/images'),
          loader: 'file-loader?name=[path][name].[ext]'
        }
      ]
    },

    plugins: [
      new ManifestPlugin(),
      new webpack.NamedModulesPlugin(),
      new StringReplacePlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        env: process.env.NODE_ENV,
        version: config.version,
        title: config.title,
        template: resolve('html/index.ejs'),
        inject: true
      }),
      new SWPrecacheWebpackPlugin({
        cacheId: 'reactjs',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: resolve('./', 'index.html'),
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        stripPrefix: './'
      })
    ]
  });
