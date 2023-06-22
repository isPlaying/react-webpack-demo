const path = require('path');

const resolve = (targetPath) => {
  return path.resolve(__dirname, '..', targetPath);
};

module.exports = {
  entry: resolve('./src/index.tsx'),
  output: {
    path: resolve('./dist'),
    clean: true,
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less'],
    alias: {
      '@': resolve('./src'),
    },
  },
};
