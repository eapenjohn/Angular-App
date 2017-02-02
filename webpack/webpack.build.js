var config = require('./config')

var params = {
    dest: config.dest,
    sourcemaps: false,
    minified: true,
    build: true,
    browser: false
}

module.exports = require('./webpack-config')(params)
