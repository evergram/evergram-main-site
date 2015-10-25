(function() {
    'use strict';

    angular
        .module('pixy')
        .constant('lodash', window._)
        .constant('pixyConfig', {
            API_ENDPOINT: 'http://localhost:8080/v1',
            SITE_ENDPOINT: 'http://localhost:3000',
            INSTAGRAM_ENDPOINT: '/auth/instagram',
            PLANS: {
                DEFAULT: 'PAYG',
                PAYG: 'PAYG',
                UNLIMITED: 'UNLTD100',
                GIFT: 'GIFT'
            },
            QUERYSTRING: {
                REDIRECT_URL: 'redirect_url',
                PLAN: 'plan'
            }
        });

    /** @ngInject */
})();
