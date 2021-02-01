let path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/ui/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/",
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
};
