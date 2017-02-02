 class WeatherServivce {


    constructor(private $http, private Constants) {

    }

    get() {
        return this.$http.get('http://localhost:54310/api/weather')
    }

}

factory.$inject = ['$http','Constants'];

function factory($http,Constants) {
    return new WeatherServivce($http,Constants)
}

angular.module('toolbox.modules.root.weather.service', ['toolbox.config'])
.factory('weatherService', factory)
