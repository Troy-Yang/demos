const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new ClearWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};