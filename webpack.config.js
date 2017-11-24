const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  node: {
    fs: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    // TODO:
    // Unexpected token keyword «function», expected punc «,»
    // new webpack.optimize.UglifyJsPlugin(),
  ],
};

