import './index'
import {config} from 'toolbox.config'

angular.element(document).ready(function() {
    $.get('/config/config.json', function(data) {

        config(data)

        angular.bootstrap(document, [
            'toolbox'
        ], {
                strictDi: true
            })
    })
})
