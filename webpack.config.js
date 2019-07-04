const path = require("path");
const publicPath = path.join(__dirname, "client", "public");
const config = require("./config");
const webpack = require("webpack");
module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000", // WebpackDevServer host and port
    "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
    "react-hot-loader/patch",
    "./client/src"
  ],
  output: {
    filename: "bundle.js",
    path: publicPath
  },
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        loader: ["babel-loader", "react-hot-loader/webpack"],
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: "empty"
  },
  devServer: {
    hot: true,
    inline: true
  }
};
