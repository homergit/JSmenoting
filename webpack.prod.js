const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {

    // module: {
    //     rules: [
    //         {
    //             include: [path.resolve(__dirname, 'src')],
    //             loader: 'babel-loader',
    //
    //             options: {
    //                 plugins: ['syntax-dynamic-import'],
    //
    //                 presets: [
    //                     [
    //                         '@babel/preset-env',
    //                         {
    //                             modules: false
    //                         }
    //                     ]
    //                 ]
    //             },
    //
    //             test: /\.js$/
    //         }
    //     ],
    // },

    mode: 'production',
});