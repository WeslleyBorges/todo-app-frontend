const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const outputPath = path.join(__dirname, '../', 'public')

module.exports = merge(common, {
  mode: 'production',
  output: {    
    path: outputPath,
    filename: './app.min.js'
  },
  plugins: [    
    new ExtractTextPlugin('app.min.css')
  ]
});