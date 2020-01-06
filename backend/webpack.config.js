const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/start.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bin.js',
  },
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'shebang-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
  ],
}
