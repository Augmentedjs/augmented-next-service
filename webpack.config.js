const path = require('path');
const webpack = require('webpack');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "node",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next-service.js',
    publicPath: '/dist/',
    library: "augmented-next-service",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: "errors-only",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ],
  externals: {
    'service-datasource': {
      commonjs: 'service-datasource',
      commonjs2: 'service-datasource',
      amd: 'service-datasource',
      root: 'service-datasource'
    },
    'service-entity-models': {
      commonjs: 'service-entity-models',
      commonjs2: 'service-entity-models',
      amd: 'service-entity-models',
      root: 'service-entity-models'
    }
  }
};
