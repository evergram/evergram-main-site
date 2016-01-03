(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('ConnectController', ConnectController);

    ConnectController.$inject =
        [
            '$window',
            '$httpParamSerializer',
            'pixyConfig'
        ];
    function ConnectController($window, $httpParamSerializer, pixyConfig) {
        /*jshint unused: false*/
        var vm = this;
        var params = {};
        params[pixyConfig.QUERYSTRING.REDIRECT_URL] = pixyConfig.ENDPOINTS.CONNECT_COMPLETE;

        $window.location.href = pixyConfig.ENDPOINTS.INSTAGRAM.CONNECT + '&' + $httpParamSerializer(params);
    }
})();
