const path = require('path');

module.exports = {
  mode: 'development',
  entry: './app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
};
