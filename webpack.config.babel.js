const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const packageName = 'flash-message';

module.exports = {
  mode: "development",
  entry: "./src/"+packageName+".js",
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "js-flash-message.js",
    publicPath: "/dist"
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
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: packageName+".css",
      chunkFilename: "[id].css"
    })
  ],
  externals: {
    "jquery": "jQuery"
  }
};