const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js',
    assetModuleFilename: 'styles/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
};
