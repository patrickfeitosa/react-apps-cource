const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/common/js/index.jsx'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: './app.js',
    },

    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: path.join(__dirname, '/node_modules'),
        },
    },

    plugins: [
        new ExtractTextPlugin('app.css'),
    ],

    module: {
        loaders: [
            {
                test: /.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread'],
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file'
            }
        ]
    }
}