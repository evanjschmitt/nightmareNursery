const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./public/src/index.js", // Entry point for the app

  output: {
    path: path.resolve(__dirname, "public/dist/app"), // Output directory
    filename: "app.js", // Output filename
  },

  module: {
    rules: [
      {
        test: /\.js$/, // Process all .js files
        exclude: /node_modules/, // Exclude dependencies
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  watch: true,
};
