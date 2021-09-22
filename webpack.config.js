const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
      },
      output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
      },
    plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'To Do List',
        header: 'Another To List App',
        metaDesc: 'Webpack Example Description',
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
  ],
  module: {
	rules: [
	  {
		test: /\.css$/,
		use: [
		  'style-loader',
		  'css-loader',
		],
	  },
      {
		test: /\.ttf$/,
		use: [
		  'url-loader',
		],
	  },
	],
  },
  mode: 'development',
  output: {
    clean: true
  },
  devServer: {
    static: './',
    open: true, 
  }
};