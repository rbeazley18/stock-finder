const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    target: 'web',
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    plugins: [
        new Dotenv(), new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     type: 'asset/resource',
            //     use: {
            //         loader: 'file-loader'
            //     }
            // },
        ]
    }
};