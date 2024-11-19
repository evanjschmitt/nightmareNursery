const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./public/src/app.js",

  output: {
    path: path.resolve(__dirname, "public/dist/app"),
    filename: "app.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules\/(?!(firebase|@firebase)\/)/, // Transpile Firebase
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  resolve: {
    fullySpecified: false, // Allow importing bare specifiers
  },

  watch: true,
};
