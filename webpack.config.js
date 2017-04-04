const webpack = require('webpack')
const { resolve } = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const CopyPkgJsonPlugin = require('copy-pkg-json-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'fn-logger',
    umdNamedDefine: true
  },
  resolve: {
    modules: [resolve('./src')],
    extensions: ['.json', '.js']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false, mangle: { except: ['exports'] }, sourceMap: true, comments: false
    }),
    new CopyWebpackPlugin([{ from: '.npmignore' }, { from: 'README.md' }]),
    new CopyPkgJsonPlugin({ remove: ['devDependencies', 'scripts', 'jest'] })
  ]
}
