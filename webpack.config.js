var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "public/js");
var JS_DIR = path.resolve(__dirname, "views/react");

var config = {
  entry: JS_DIR + "/" + "index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: "babel"
      }
    ]
  }
};

module.exports = config;
