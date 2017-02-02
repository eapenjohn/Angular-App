'use strict'

var config = require('./config')
var config_url = require('../src/config/config.json')
var alias = require('./alias')
var loaders = require('./loaders')
var preLoaders = require('./preloaders')
var plugins = require('./plugins')

var path = require('path')

var src = path.resolve(__dirname, '../' + config.src)
var root = path.resolve(__dirname, '../')

function configFactory(params) {

    var webpack_config = {
        context: src,
        entry: {
            index: './bootstrap.ts',
            vendor: './vendor.ts',
            // vendor_language: './vendor_language.ts',
        },
        output: {
            path: path.resolve(__dirname, '../' + params.dest),
            filename: '[name]-[id]-[hash].js',
            chunkFilename: '[name]-[id]-[hash].chunk.js'
        },
        resolve: {
            root: root,
            extensions: ['', '.ts', '.js', '.json'],
            alias: alias
        },
        resolveLoader: {
            modulesDirectories: ['node_modules']
        },
        devtool: 'source-map',
        module: {},
        ts: {
            transpileOnly: true
        },
        devServer: {
            hot: true,
            contentBase: 'src',
            watch: true,
            port: 3100,
            quiet: false,
            noInfo: false,
            stats: {
                colors: true
            },
            proxy: [{
                path: /.*\/angular-i18n\/.*/,
                target: 'http://localhost:9090'
            }, {
                path: /.*\/ToolBoxCMS\/.*/,
                target: config_url.UMBRACO_CMS_URL,
                rewrite: function(req) {
                    req.url = req.url.replace(/^\/ToolBoxCMS/, '')
                    return req.url
                }
            }]
        }
    }

    if (params.mockups) {
        webpack_config.entry.index = './bootstrap.mockups.ts'
    }

    if (params.sourcemaps === false) {
        delete webpack_config.devtool
        webpack_config.ts.compilerOptions = webpack_config.ts.compilerOptions || {}
        webpack_config.ts.compilerOptions.sourceMap = false
    } else {
        webpack_config.devtool = params.sourcemaps || 'source-map'
    }

    webpack_config.plugins = plugins(params)
    webpack_config.module.loaders = loaders(params)

    if (params.preloaders) {
        webpack_config.module.preLoaders = preLoaders(params)
    }

    return webpack_config
}


module.exports = configFactory