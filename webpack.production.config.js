const { resolve } = require('path');
const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'babel-polyfill',
        './index.js'
    ],

    output: {
        path: resolve(__dirname, 'webroot'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 2}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {config: {path: 'postcss.config.js'}}
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new SWPrecacheWebpackPlugin({
            cacheId: 'myshopanalyst',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: 'https://myshopanalyst.com/index.html',
            mergeStaticsConfig: true,
            staticFileGlobs: [
                'webroot/img/**.*',
                'webroot/favicon.png',
                'webroot/index.html',
                'webroot/manifest.json'
            ],
            verbose: true
        })
    ],
};
