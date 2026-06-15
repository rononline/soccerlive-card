const path = require('path');

module.exports = {
  entry: './src/soccer-live-card.js',
  output: {
    filename: 'soccer-live-card.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: "> 0.25%, not dead",
              }]
            ]
          }
        }
      }
    ]
  },
  mode: 'production',
  performance: { hints: false }, // suppress size warnings (338 KiB is normal for a lit card)
};
