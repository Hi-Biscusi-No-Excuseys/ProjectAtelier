const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, './client/src/index.jsx'),
    styles: [
      path.resolve(__dirname, './client/dist/styles.css'),
      path.resolve(__dirname, './client/dist/overview.css'),
      path.resolve(__dirname, './client/dist/related.css'),
      path.resolve(__dirname, './client/dist/reviews.css'),
    ],
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader',
      },
    ],
  },
};
