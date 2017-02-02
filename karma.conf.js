'use strict';

var webpackConfig = require('./webpack/webpack.test')

webpackConfig.entry = {}

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatchBatchDelay: 300,
        files: [
            'karma.test.js'
        ],
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        preprocessors: {
            'karma.test.js': ['webpack', 'sourcemap'],
            //'src/**/!(*.spec)+(.ts)': ['coverage']
        },
        webpackMiddleware: {
            noInfo: true,
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        webpack: webpackConfig,
        reporters: [
            'mocha'
            // 'dots',
            // 'spec',
            // 'coverage'
        ],
        mochaReporter: {
            ignoreSkipped: true,
            output: 'autoWatch' // Options full(default) minimal autoWatch noFailures
        },
        coverageReporter: {
            reporters: [{
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'html'
            }, {
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'cobertura'
            }, {
                dir: 'reports/coverage/',
                subdir: '.',
                type: 'json'
            }]
        }
    });
};
