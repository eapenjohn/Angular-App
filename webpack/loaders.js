'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = loadersFactory

function loadersFactory(params) {
    var list = [{
        test: /\.js$/,
        loader: 'ng-annotate!babel',
        exclude: /(node_modules|Plugins|jquery-ui)/
    }, {
        test: /\.json$/,
        loader: 'json'
    }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }, {
        test: /\.jade$/,
        exclude: /node_modules/,
        loader: 'jade'
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    }]

    if (params.test && params.build) {
        list.push({
            test: /\.ts(x?)$/,
            loader: 'eslint!ng-annotate!ts'
        })
    } else {
        list.push({
            test: /\.ts(x?)$/,
            loader: 'ng-annotate!ts'
        })
    }

    if (params.build) {
        list = list.concat([{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name]-[hash].[ext]'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=[path][name]-[hash].[ext]'
        }, {
            test: /\.jpg$/,
            exclude: /node_modules/,
            loader: 'file-loader?name=[path][name]-[hash].[ext]'
        }, {
            test: /\.gif$/,
            loader: 'file-loader?name=[path][name]-[hash].[ext]'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=10000&mimetype=image/png&name=[path][name]-[hash].[ext]'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }])
    } else {
        list = list.concat([{
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
        }, {
            test: /\.jpg$/,
            exclude: /node_modules/,
            loader: 'file'
        }, {
            test: /\.gif$/,
            loader: 'file'
        }, {
            test: /\.png$/,
            loader: 'file'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }])
    }

    return list
}