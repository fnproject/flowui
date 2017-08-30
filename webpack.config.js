var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
const debug = true

var config = {
        entry: APP_DIR + '/index.jsx',
        devtool: debug ? '#source-map' : false,

    output: {
            path: BUILD_DIR,
            filename: 'bundle.js'
        },
        module: {
            loaders: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules'],
            }, {
                test: /\.jsx?/,
                include:
                APP_DIR,
                use: 'babel-loader'
            },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                        'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.iinterlaced=false'
                    ]
                }
            ]
        }
    }
;

module.exports = config;
