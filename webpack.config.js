const { watch } = require("fs");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./public/src/index.js",

  output: {
    path: path.resolve(__dirname, "public/dist/app"),
    filename: "app.js",
  },
  watch: true,
};