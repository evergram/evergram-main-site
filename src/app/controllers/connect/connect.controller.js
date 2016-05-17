(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('ConnectController', ConnectController);

    ConnectController.$inject =
        [
            '$window',
            '$httpParamSerializer',
            'pixyConfig',
            '$location'
        ];
    function ConnectController($window, $httpParamSerializer, pixyConfig, $location) {
        /*jshint unused: false*/
        var vm = this;
        var querystring = $location.search();

        if (!!querystring.err) {
            vm.error = $window.decodeURIComponent(querystring.err);
        }
    }
})();
