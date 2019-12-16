const path = require('path');

console.log(__dirname);

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'todo'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
                }
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', "sass-loader"]
        }
      ]
    },
  devtool: "cheap-eval-source-map",
  mode: "none"
};