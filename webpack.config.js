var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './src/js/script.js',
    output: {
        path: __dirname + '/build/js/',
        filename: 'script.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    devtool: "source-map",
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true
        })
    ] : [

    ]
};
