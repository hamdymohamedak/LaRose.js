const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: "./src/components/LaRose.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./src/components/LaRoseBundle.jsx", // Change the extension to .js for bundled files
  },
  plugins: [new MinifyPlugin(/* minifyOpts, pluginOpts */)],
};
