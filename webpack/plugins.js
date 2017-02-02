'use strict'

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
var requireErrorHandlerPlugin = require('require-error-handler-webpack-plugin');
var JsonpMainTemplatePlugin = require('webpack/lib/JsonpMainTemplatePlugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpack = require('webpack')
var path = require('path')
var config = require('./config')

var root_dir = path.resolve(__dirname, config.root)

module.exports = pluginsFactory

function pluginsFactory(params) {

    var list = [
        new requireErrorHandlerPlugin.JsonpErrorHandlerPlugin(JsonpMainTemplatePlugin),
        new requireErrorHandlerPlugin.RequireEnsureErrorHandlerPlugin(),
        new requireErrorHandlerPlugin.AMDRequireErrorHandlerPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.template.jade',
            inject: 'body',
            hash: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        }),
        new ExtractTextPlugin('style.css', '[name]-[id]-[contenthash].css'),
        new CaseSensitivePathsPlugin()
    ]

    if (params.build) {
        if (!params.test) {
            list.push(new CleanWebpackPlugin([params.dest], {
                root: root_dir,
                verbose: true,
                dry: false
            }))

            list.push(new webpack.optimize.CommonsChunkPlugin({
                name: 'common_chunks',
                filename: '[name]-[id]-[hash].js'
            }))
        }
        list.push(new CopyWebpackPlugin([{
            from: 'languages/**/*'
        }, {
            from: 'config/config.json',
            to: 'config/'
        }, {
            from: 'contents/images/**/*'
        }, {
            from: '../node_modules/angular-i18n',
            to: 'angular-i18n'
        }, {
            from: '../node_modules/jquery-ui',
            to: 'jquery-ui'
        }]))

    }

    if (!params.test) {
        list.push(new webpack.optimize.DedupePlugin())
    }

    if (params.minified) {
        var uglifyOptions = {
            warning: false,
            mangle: true,
            comments: false
        }
        list.push(new webpack.optimize.UglifyJsPlugin(uglifyOptions))
    }

    if (params.browser) {
        var browserParams = {
            host: 'localhost',
            port: config.server_port,
            proxy: 'http://localhost:' + config.devserver_port,
            ui: false,
            online: false,
            notify: false,
            open: false
        }

        list.push(new BrowserSyncPlugin(browserParams))
    }

    // Throws error when ES lint fails
    list.push(function() {
        this.plugin('done', function(stats) {
            if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
                console.log(stats.compilation.errors);
                process.exit(1); // or throw new Error('webpack build failed.');
            }
        });
    })

    return list
}
