(function() {
    'use strict';

    angular
        .module('pixy')
        .config(config);

    /** @ngInject */
    function config($locationProvider, RestangularProvider, stripeProvider, analytics, pixyConfig) {
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //}).hashPrefix('!');

        // set endpoints for API
        RestangularProvider.setBaseUrl(pixyConfig.API_ENDPOINT);

        // set stripe key
        stripeProvider.setPublishableKey(pixyConfig.STRIPE.KEY);

        // load segment io
        analytics.load(pixyConfig.SEGMENT.KEY);
    }
})();
