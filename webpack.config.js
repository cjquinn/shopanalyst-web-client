const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.js'
    ],

    output: {
        path: resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        contentBase: resolve(__dirname, 'public'),
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devtool: 'inline-source-map'
};
