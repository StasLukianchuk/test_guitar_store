const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'bundle.html',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
