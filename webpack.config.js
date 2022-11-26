import { resolve } from 'path';
import Dotenv from 'dotenv-webpack';

export const context = __dirname;
export const entry = './src/index.js';
export const target = 'node';
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js',
};
export const plugins = [
    new Dotenv(),
];
export const module = {
    rules: [
        {
            test: /\.js$/,
            // exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ]
};