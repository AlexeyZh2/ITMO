const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';
    return {
        mode: "production",

        entry: {
            'main': './assets/js/main.js',
        },

        output: {
            filename: 'js/[name].js',
            path: path.resolve(__dirname, 'public/build'),
            clean: true,
            assetModuleFilename: 'images/[name][ext]'
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: "css/[name].css",
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader'
                    ],
                },
                // загрузка изображений
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    exclude: /node_modules/,
                    type: 'asset/resource'
                },

            ]
        },
        optimization: {
            minimizer: [
                `...`,
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            'default',
                            {
                                discardComments: {removeAll: true},
                            },
                        ],
                    },
                }),
            ],
        },
        // devServer: {
        //     static: './dist',
        //     port: 9000,
        //     client: {
        //         logging: 'warn', // 'log' | 'info' | 'warn' | 'error' | 'none'
        //         overlay: false,
        //     }
        // }
    }
}