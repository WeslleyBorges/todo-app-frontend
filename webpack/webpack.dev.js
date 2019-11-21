const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const outPutPath = path.join(__dirname, '../', 'public')
console.log('OUTPUT PATH:', outPutPath)

module.exports = merge(common, {
  mode: 'development',  
  output: {
    path: outPutPath,
    filename: './app.js'
  },
  plugins: [    
    new ExtractTextPlugin('app.css')
  ]
});