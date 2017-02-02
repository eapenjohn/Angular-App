'use strict'

module.exports = preloadersFactory

function preloadersFactory() {

    var list = [{
        test: /\.js$/,
        loader: 'source-map-loader!eslint',
        exclude: /node_modules/
    }]
    return list
}
