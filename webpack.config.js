const { watch } = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [
      "./src/restaurantPg.html",
      "./src/index.js",
      "./src/home.js",
      "./src/contact.js",
      "./src/menu.js",
      "./src/style.css",
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/restaurantPg.html",
    }),
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
