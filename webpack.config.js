const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
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
  mode: 'development'
};