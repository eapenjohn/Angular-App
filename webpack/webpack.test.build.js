var config = require('./config')

var params = {
    dest: config.dest,
    minified: false,
    build: true,
    browser: false,
    sourcemaps: 'inline-source-map',
    preloaders: true,
    test: true
}

module.exports = require('./webpack-config')(params);
