const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'stone-tool.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  }
}