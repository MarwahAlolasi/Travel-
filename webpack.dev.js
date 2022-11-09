const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/client/index.js',
    stats: 'verbose',
    output: {
        clean: true, // Clean the output directory before emit
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            context: () => true,
            target: 'http://localhost:8080',
            secure: false,
        },
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: './src/client/media', to: './media' }],
        }),
    ],
};