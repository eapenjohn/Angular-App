export function config(config) {
    var constJson = require('./constants.json')

    var Constants = angular.extend(constJson, config)

    angular
        .module('toolbox.config', [])
        .constant('Constants', Constants)
}
