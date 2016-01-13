(function() {
    'use strict';

    angular
        .module('pixy')
        .config(config);

    /** @ngInject */
    function config(NotificationProvider, RestangularProvider, stripeProvider, analytics, pixyConfig) {
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

        // setup ui-notifications config
        NotificationProvider.setOptions({
            delay: 4000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top',
            replaceMessage: true
        });
    }
})();
