const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/index.tsx", "webpack-hot-middleware/client"]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inlineSource: "bundle.js$"
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    "redux": "Redux"
  }
};
