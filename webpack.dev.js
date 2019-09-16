
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map', // 只提示行信息
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: './dist/',
    host: '127.0.0.1',
    port: 3000,
    writeToDisk: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    })
  ]
});