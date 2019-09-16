
const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    theme: './src/js/theme.js'
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(scss)$/,
      use: [{
        // loader: 'style-loader', // inject CSS to page
        loader: MiniCssExtractPlugin.loader,
        options: {
          // publicPath: '../',
          // hmr: process.env.NODE_ENV === 'development',
        },
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
        options: {
          sourceMap: true
        }
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
        options: {
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader', // Run postcss actions
        options: {
          sourceMap: true,
          plugins: function () { // postcss plugins, can be exported to postcss.config.js
            return [
              require('autoprefixer')
            ];
          }
        }
      }]
    }]
  },
  plugins: [ ]
}