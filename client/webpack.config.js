const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'App.js'),
  // entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // test: /\.(png|svg|jpg|gif|pdf)$/,
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // loader: 'raw-loader',
            // options: {
            //   name: '[name].[ext]'
            // }
          }
        ]
        test: /\.pdf$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.pdf$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: `[name][ext]`
      //   }
      // },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js'
  },
};
