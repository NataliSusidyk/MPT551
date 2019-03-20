const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/javascript/index.js',
  plugins: [
 	 new HtmlWebpackPlugin({template:  './src/index.html' }),
 	 new CopyPlugin([ { from: 'src/css/main.css', to: '' }])
    ]

};
