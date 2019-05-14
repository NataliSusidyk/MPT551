var path = require('path');
 
module.exports = {
  entry: './client/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
