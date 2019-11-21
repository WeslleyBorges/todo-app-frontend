const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const nodeModulesPath = `${path.join(__dirname, '../', 'node_modules')}`
const indexTemplatePath = `${path.join(__dirname, '../', 'src/templates/index_template.html')}`

module.exports = {
  entry: './src/index.jsx',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Todo App',
      template: indexTemplatePath
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      modules: nodeModulesPath
    }
  },
  devServer: {
    port: 8080,
    contentBase: '../public'
  },
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }]
  }
};