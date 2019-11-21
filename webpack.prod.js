const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: __dirname + '/public',
    filename: './app.min.js'
  },
  plugins: [    
    new ExtractTextPlugin('app.min.css')
  ]
});