/* eslint-disable */
module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/public/dist/scripts',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['./../../babelRelay']
        }
      }
    ]
  }
};