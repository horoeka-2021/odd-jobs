const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  // After the .scss files have been read, spew out a normal .css file
  plugins: [new MiniCssExtractPlugin({
    filename: 'css/app.css'
  })],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-syntax-jsx'
            ]
          }
        }
      },
      // Allow webpack to process .scss files and convert them to normal CSS.
      {
        // This pattern is exclusively for .scss files. Do not target any other files.
        test: /\.scss$/i,
        // Only look for files in this "styles" directory
        include: path.resolve(__dirname, 'styles'),
        // Run the .scss file contents through a pipeline of loaders to turn it into regular CSS.
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
