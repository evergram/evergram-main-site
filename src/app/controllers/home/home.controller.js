(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('HomeController', HomeController);

    HomeController.$inject =
        [
            '$httpParamSerializer',
            'pixyConfig'
        ];
    function HomeController($httpParamSerializer, pixyConfig) {
        /*jshint unused: false*/
        var vm = this;

        var redeemParams = {};

        vm.reauthUrl = pixyConfig.ENDPOINTS.CONNECT;

        redeemParams[pixyConfig.QUERYSTRING.PLAN] = 'GIFT6';
        vm.redeemUrl = pixyConfig.ENDPOINTS.REDEEM + '?' + $httpParamSerializer(redeemParams);

        vm.choosePlanUrl = pixyConfig.ENDPOINTS.CHOOSE_PLAN;
    }
})();
