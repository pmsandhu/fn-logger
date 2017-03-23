const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'debug-logger'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(\/node_modules\/|tests?|\.spec\.js$)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin(
      { beautify: false, mangle: { except: ['exports'] }, sourceMap: true, comments: false }
    ),
    new CopyWebpackPlugin([
      { from: '.npmignore' },
      { from: 'package.json' },
      { from: 'README.md' }
      // { from: '__pics__', to: '__pics__' }
    ])
  ]
}
