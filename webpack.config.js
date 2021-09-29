const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');




module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'main.[contenthash].js'
    },


    devServer: {
        port: 9000,
        hot: true,
        static: './'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
           
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                           
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        },
                    },
                ],
            }

        ],
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({ template: resolve(__dirname, 'index.html') }),

        new CopyPlugin({
            patterns: [
                { from: "img", to: "img" },
                { from: "video", to: "video" },
                { from: "audio", to: "audio" }
            ],
        }),
        // new BundleAnalyzerPlugin(),
    ],

}
