const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const resolve = (targetPath) => {
  return path.resolve(__dirname, '..', targetPath);
};

const config = merge(baseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        include: /\.module\.less$/,
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        exclude: /\.module\.less$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash:8].css' }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('./public/index.html'),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});

// https://github.com/stephencookdev/speed-measure-webpack-plugin/issues/167
const cssPluginIndex = config.plugins.findIndex((e) => e.constructor.name === 'MiniCssExtractPlugin');
const cssPlugin = config.plugins[cssPluginIndex];
const configToExport = smp.wrap(config);
configToExport.plugins[cssPluginIndex] = cssPlugin;

module.exports = configToExport;
