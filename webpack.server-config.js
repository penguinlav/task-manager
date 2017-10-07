const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';

const URL = 'http://138.197.187.175/';

module.exports = {
    name: 'SSR',
    target: 'node',
    entry: {
         //#1
        testServerBundle: './test_server/server.js',
        // #2
        serverBundle: './server/index.js',
    },
    context: `${__dirname}/`,
    output: {
        path: `${__dirname}/static/server`,
        filename: '[name].js',
        publicPath: '/static/server/',
        library: '[name]',
    },

    watch: NODE_ENV === 'development',
    externals: nodeExternals(),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1',
                include: [`${__dirname}/static_src`, `${__dirname}/server`, `${__dirname}/test_server`]
            },
            // #2
            {
                test: /\.(css|scss)$/,
                loader: 'ignore-loader',
                include: [`${__dirname}/static_src`, `${__dirname}/test_server`]
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            SERVER: true,
            SERVER_URL: JSON.stringify(URL),
        }),
    ],

    resolve: {
        modules: [`${__dirname}/static_src`, `${__dirname}/server`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
