angular.module('toolbox.modules.root', [
        'ui.router',
        'toolbox.modules.root.weather'
    ])
    .config(rootConfig)
    .run(rootRun)

function rootConfig($stateProvider: any, $urlRouterProvider: any) {
    $stateProvider
        .state('root', {
            url: '/?mockups',
            template: require('./root.template.jade'),
            requireADLogin: false
        })

    $urlRouterProvider.when('', '/weather')
    $urlRouterProvider.when('/', '/weather')
}

function rootRun($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}