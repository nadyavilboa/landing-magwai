const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'build')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,
                
                'css-loader', 'sass-loader']
            },
            {
                test: /\.png|svg|jpg|jpeg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/img', to: 'img' },
                { from: 'src/index.html' },
            ]
        }),
    ],
}