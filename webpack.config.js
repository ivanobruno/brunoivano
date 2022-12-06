const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: './src',
              outputPath: '/',
              publicPath: '/'
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "style.css",
        },
        use: ["sass-loader"],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // remove all files from this folder before generating new files
    new CleanWebpackPlugin(),
  ],
};
