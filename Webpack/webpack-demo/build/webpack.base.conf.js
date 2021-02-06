const path = require('path');
const config = require('../config')
const utils = require('./utils')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    mode: devMode ? config.dev.mode : config.build.mode,
    target: 'web',
    context: path.resolve(__dirname, "../"),
    entry: {
      app: './src/main.js'
    },
    output: {
      path: config.build.assetsRoot,
      filename: '[name].[contenthash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx','.ts','.tsx'],
      alias: {
        "@": path.join(__dirname, "../src"),
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          include: [resolve('src')],
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }      
        },
        ...utils.styleLoaders({
          sourceMap: devMode ? config.dev.cssSourceMap : config.build.cssSourceMap,
          usePostCSS: true
        }),
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: utils.assetsPath("img/[name].[hash:7].[ext][query]")
          },
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: utils.assetsPath("img/[name].[hash:7].[ext][query]")
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: devMode ? config.dev.index : config.build.index,
        template: "index.html",
        inject: true,
        minify: {
          removeComments: devMode ? false : true,
          collapseWhitespace: devMode ? false : true,
          removeAttributeQuotes: devMode ? false : true
        },
        chunksSortMode: "auto"
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../public"),
            to: devMode ? config.dev.assetsSubDirectory : config.build.assetsSubDirectory,
            globOptions: {
              ignore: [".*"],
            }
          },
        ],
        options: {
          concurrency: 100,
        },
      }),
    ]
}