(function() {
    'use strict';

    var IS_PIXY_PROD = !!window.IS_PIXY_PROD;

    /*globals document, window */
    angular
        .module('pixy')
        .constant('document', document)
        .constant('lodash', window._)
        .constant('analytics', window.analytics)
        .constant('pixyConfig', {
            API_ENDPOINT: IS_PIXY_PROD ? 'https://api.dev.printwithpixy.com/v1' : 'http://localhost:8080/v1',
            SITE_ENDPOINT: IS_PIXY_PROD ? 'https://secure.printwithpixy.com' : 'http://localhost:3000',
            INSTAGRAM_ENDPOINT: '/auth/instagram',
            STRIPE: {
                KEY: IS_PIXY_PROD ? 'pk_live_QAuikbQoj5IyU9wdrUlXl62v' : 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ'
            },
            SEGMENT: {
                KEY: IS_PIXY_PROD ? 'muRTZV1seEGRxPm6r1xswhZta9Xvvx3X' : 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk'
            },
            PLANS: {
                DEFAULT: 'PAYG',
                PAYG: {
                    title: 'Pay per photo',
                    code: 'PAYG'
                },
                VALUE100: {
                    title: 'Value pack',
                    code: 'VALUE100'
                },
                GIFT: {
                    title: 'Gift Subscription',
                    code: 'GIFT'
                },
                'KIDSPOT-LIMIT-10': {
                    code: 'KIDSPOT-LIMIT-10'
                },
                'PROMO-LIMIT-10': {
                    code: 'PROMO-LIMIT-10'
                },
                'TREASURE-LIMIT-10': {
                    code: 'TREASURE-LIMIT-10'
                },
                'BINDLE-LIMIT-10': {
                    code: 'BINDLE-LIMIT-10'
                },
                'PROMO-LIMIT-20': {
                    code: 'PROMO-LIMIT-20'
                },
                'PROMOGIFT3': {
                    code: 'PROMOGIFT3'
                },
                'PROMO-LIMIT-50': {
                    code: 'PROMO-LIMIT-50'
                },
                'APD-LIMIT-50': {
                    code: 'APD-LIMIT-50'
                },
                PROMOGIFT12: {
                    code: 'PROMOGIFT12'
                },
                PROMOGIFT6: {
                    code: 'PROMOGIFT6'
                },
                GIFT6: {
                    code: 'GIFT6'
                },
                GIFT12: {
                    code: 'GIFT12'
                }
            },
            QUERYSTRING: {
                REDIRECT_URL: 'redirect_url',
                PLAN: 'plan'
            }
        });

    /** @ngInject */
})();
