/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable quotes */
var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'source-map',
    entry: './index',
    mode: 'development',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: [
                                "react-hot-loader/babel"
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ["url-loader?limit=10000&minetype=application/font-woff"]
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                use: ["file-loader"]
            }

        ]
    },
    // plugins: [
    //     new webpack.NormalModuleReplacementPlugin(
    //         /^react-awesome-query-builder/, function(data) {
    //             const suffix = data.request.substring('react-awesome-query-builder'.length);
    //             data.request = path.resolve(__dirname, '../modules/' + suffix);
    //         }
    //     ),
    // ]
};
