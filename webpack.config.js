const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.bundle.js',
  },
  module: {
    rules: [
      // CSS and style loader configuration
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Other rules...
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
};
