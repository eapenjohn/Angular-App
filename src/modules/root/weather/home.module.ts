import {
    HomeController
} from './home.controller'

 angular
    .module('toolbox.modules.root.weather', [
        'toolbox.modules.root.weather.service'
    ])
    .controller('HomeController', HomeController)
    .config(config)

function config($stateProvider: any) {

    $stateProvider
        .state('root.weather', {
            url: 'weather',
            abstract: false,
            template: require('./home.template.html'),
            requireADLogin: false,
            controller: 'HomeController',
            controllerAs: 'HomeController'
        })
}
