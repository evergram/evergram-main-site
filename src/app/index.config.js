(function() {
    'use strict';

    angular
        .module('pixy')
        .config(config);

    /** @ngInject */
    function config(RestangularProvider, stripeProvider, analytics, pixyConfig) {
        // set endpoints for API
        RestangularProvider.setBaseUrl(pixyConfig.API_ENDPOINT);

        // set stripe key
        stripeProvider.setPublishableKey(pixyConfig.STRIPE.KEY);

        // load segment io
        analytics.load(pixyConfig.SEGMENT.KEY);
    }
})();
