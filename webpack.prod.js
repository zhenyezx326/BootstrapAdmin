
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 压缩 css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'cheap-module-eval-source-map', // 不生成 map 文件, map 信息在打包文件里
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].min.js'
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['js/*', 'css/*']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,   // 生成 source-map 文件
            annotation: true // 添加 source-map 路径注释
          }
        }
      }), // 这里要指定压缩 js
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        }
      })
    ]
  }
});