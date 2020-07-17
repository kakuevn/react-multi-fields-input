const path = require('path')
const webpack = require('webpack')
const lintFormatter = require('eslint-formatter-friendly')

module.exports = {
  entry: path.resolve(__dirname, 'src/components/index.tsx'),
  output: {
    globalObject: 'this',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
    libraryTarget: 'commonjs2',
  },

  devtool: 'cheap-source-map',

  stats: 'errors-only',

  node: {
    fs: 'empty',
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          configFile: './.eslintrc.json',
          formatter: lintFormatter,
          failOnWarning: false,
          failOnError: false,
        },
      },
      { enforce: 'pre', test: /\.tsx?$/, loader: 'source-map-loader' },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=app/fonts/[name].[ext]',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          configFile: path.resolve(__dirname, '.babelrc.json'),
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],

  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
    },
  },
}
