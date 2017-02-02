'use strict'

var config = require('../src/config/config.json')
var express = require('express')
var proxy = require('http-proxy-middleware')
var morgan = require('morgan')

var app = express.createServer()

var pattern = /^https:\/\//

var options = {
    target: config.UMBRACO_CMS_URL.replace(pattern, 'http://'),
    pathRewrite: {
        '^/ToolBoxCMS': ''
    }
}

var umbracoProxy = proxy(options)

app.use(morgan('dev'))

app.use('/ToolBoxCMS', umbracoProxy)

app.use(express.static('dist'))

app.listen(8080)
