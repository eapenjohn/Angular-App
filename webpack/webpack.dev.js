var config = require('./config')

var params = {
    dest: config.dest,
    minified: false,
    build: false,
    browser: true
}

module.exports = require('./webpack-config')(params);
