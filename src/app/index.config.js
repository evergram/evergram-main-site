(function() {
    'use strict';

    angular
        .module('pixy')
        .config(config);

    /** @ngInject */
    function config(RestangularProvider) {
        RestangularProvider.setBaseUrl('http://localhost:8080/v1');
    }
})();
