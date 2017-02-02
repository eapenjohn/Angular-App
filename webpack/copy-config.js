#!/usr/bin/env node

'use strict';

var fs = require('fs-extra')
var path = require('path')
var config = require('./config')

const args = process.argv

var src_sufix = args[2]
var dest_folder = args[3]

var src_options = ['dev', 'test', 'preprod', 'prod']

if (src_options.indexOf(src_sufix) > -1) {} else {
    throw 'invalid src option: ' + src_sufix
}

var dest

if (dest_folder === 'src') {
    dest = path.resolve(__dirname, '../' + config.src)
} else if (dest_folder === 'dist') {
    dest = path.resolve(__dirname, '../' + config.dest)
} else {
    throw 'invalid dest option: ' + dest_folder
}

var root = path.resolve(__dirname, '../')

fs.copySync(root + '/config/config-' + src_sufix + '.json', dest + '/config/config.json')
fs.copySync(root + '/config/googleAnalytics-' + src_sufix + '.js', dest + '/googleAnalytics.js')
