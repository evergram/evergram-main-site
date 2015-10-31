(function() {
    'use strict';

    /*globals document, window */
    angular
        .module('pixy')
        .constant('document', document)
        .constant('lodash', window._)
        .constant('analytics', window.analytics)
        .constant('pixyConfig', {
            API_ENDPOINT: 'http://localhost:8080/v1',
            SITE_ENDPOINT: 'http://localhost:3000',
            INSTAGRAM_ENDPOINT: '/auth/instagram',
            STRIPE: {
                KEY: 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ'
            },
            SEGMENT: {
                KEY: 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk'
            },
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
