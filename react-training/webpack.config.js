const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/common/js/index.jsx'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: './bundle.js',
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread'],
            }
        }],
    }
}