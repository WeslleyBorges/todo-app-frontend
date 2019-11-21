const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',  
  output: {
    path: __dirname + '/public',
    filename: './app.js'
  },
  plugins: [    
    new ExtractTextPlugin('app.css')
  ]
});