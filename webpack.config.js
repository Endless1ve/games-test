const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // добавили минификацию CSS
      },
      {
        test: /\.(eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: [{
            loader: "file-loader",
            options: {
                outputPath: './images/',
                esModule: false,
            },
        }, ],
    },
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
            loader: "image-webpack-loader",
            options: {
                name: "[path][chunkhash].[ext]",
                bypassOnDebug: true,
                disable: false,
            },
        }, ],
    } 
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
};