const path = require('path');

module.exports = {
  entry: {
    'dist/sequential-data-view': './src/sequential-data-view.ts',
    'demo/app': './demo/main.ts'
  },
  output: {
    filename: '[name].js',
    library: 'sequential-data-view',
    libraryTarget: 'umd',
    path: path.resolve(__dirname),
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.md']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.md?$/, loader: 'raw-loader' },
      { test: /\.png?$/, loader: 'raw-loader' },
      { test: /\.jpg?$/, loader: 'raw-loader' },
      { test: /\.css?$/, loader: 'raw-loader' }
    ]
  },
  devServer: {
    open: true,
    static: path.join(__dirname),
  },
  devtool: 'source-map'
}