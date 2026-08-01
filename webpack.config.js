const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/soccer-live-card.js',
  output: {
    filename: 'soccer-live-card.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Home Assistant 2024.8+ runs in evergreen browsers. Keeping native modern
  // JavaScript avoids Babel helper/transformation overhead in the one HACS
  // asset without excluding any browser supported by our declared HA minimum.
  target: ['web', 'es2022'],
  module: {
    rules: [
      {
        test: /i18n\.js$/,
        include: path.resolve(__dirname, 'src/i18n.js'),
        use: path.resolve(__dirname, 'scripts/compact-i18n-loader.cjs'),
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: path.resolve(__dirname, 'scripts/minify-lit-css-loader.cjs'),
      },
    ],
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        ecma: 2022,
        compress: {
          passes: 5,
          booleans_as_integers: true,
          drop_debugger: true,
        },
        format: { comments: false },
      },
      extractComments: false,
    })],
  },
  plugins: [
    // Editor imports defer module execution, but HACS installs one plugin
    // asset. Merge async chunks into that single distributable bundle.
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
  // The explicit check-bundle-size script provides the actionable limit.
  performance: { hints: false },
};
