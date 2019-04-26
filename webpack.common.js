const webpack = require('webpack');
const path = require('path');

const autoprefixer = require('autoprefixer');
const precss = require('precss');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            rules: {
                                configFile: '../tslint.json',
                            }
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,

                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',

                        options: {
                            plugins: function() {
                                return [precss, autoprefixer];
                            }
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },



    entry: {
        common: './src/common/common.js',
        admin: './src/admin/admin.js',
        visitor: './src/visitor/visitor.js'
    },

    output: {
        path: path.join(__dirname, './dist'),
        filename: "./[name]/[name].js"
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: './src/index.html'
            },
            {
                from: './src/admin/index.html', to: './admin'
            },
            {
                from: './src/visitor/index.html', to: './visitor'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: './styles/styles.css'
        }),
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    priority: -10,
                    test: /[\\/]node_modules[\\/]/
                }
            },

            chunks: 'async',
            minChunks: 1,
            minSize: 30000,
            name: true
        }
    }
};
