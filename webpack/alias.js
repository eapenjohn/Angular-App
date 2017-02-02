var path = require('path')
var config = require('./config')

var src = path.resolve(__dirname, '../' + config.src)

module.exports = {
    'bootstrap-css': 'bootstrap/dist/css/bootstrap.css',
    'angular-translate-loader-static-files': 'angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
    'toolbox.config': src + '/Config/config.ts'
}
