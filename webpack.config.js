const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: ['./js/app.js', './js/events.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/[name].bundle.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    // stats: 'errors-only',
    port: 3000,
    // host: '192.168.1.109',
    proxy: {
      '/data': 'http://localhost:9000',
    },
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      chunks: ['app', 'common'],
      appMountId: 'app',
      // template: './templates/index.pug',
      template: require('html-webpack-template'),
      // baseHref: 'http://example.com/awesome',
      // devServer: 'http://localhost:3001',
      // googleAnalytics: {
      //   trackingId: 'UA-XXXX-XX',
      //   pageViewOnLoad: true
      // },
      meta: [
        {
          name: 'description',
          content: 'A better default template for html-webpack-plugin.'
        },
      ],
      mobile: true,
      lang: 'en-US',
      links: [
        'https://fonts.googleapis.com/css?family=Roboto',
        {
          href: '/apple-touch-icon.png',
          rel: 'apple-touch-icon',
          sizes: '180x180',
        },
        {
          href: '/favicon-32x32.png',
          rel: 'icon',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      // inlineManifestWebpackName: 'webpackManifest',
      // scripts: [
        // 'http://example.com/somescript.js',
        // {
        //   src: '/myModule.js',
        //   type: 'module'
        // }
      // ],
      title: 'My App',
      window: {
        env: {
          apiHost: 'http://localhost:3000',
        },
      },
    }),
    new ExtractTextPlugin('assets/styles/[name].bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'assets/scripts/common.js',
      minChunks: 2,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          publicPath: '../',
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true,
                importLoaders: 3,
               // modules: true,
               // localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'import-glob-loader',
            },
          ],
        })),
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1,
              mimetype: 'image/svg+xml',
              publicPath: '../../',
              name: './assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(png)$/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 1,
          //     mimetype: 'image/png',
          //     publicPath: '../../',
          //     name: './assets/images/[name].[ext]',
          //   },
          // },
          {
            loader: 'file-loader',
              options: {
                mimetype: 'image/png',
                publicPath: '../../',
                name: 'assets/images/[name].[ext]',
            }
          },
        ],
      },
      {
        test: /\.(jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              mimetype: 'image/jpg',
              publicPath: '../../',
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '../../',
              name: './assets/fonts/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};

module.exports = function(env) {
  if (env === 'production') {
    config.plugins = config.plugins.concat([
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: true,
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // new FaviconsWebpackPlugin('./favicon.png')
    ]);
  }
  return config;
};


