const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge( common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/template.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[hash].css'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.png',
      outputPath: 'img'
    })
  ]
})
