(function() {
    'use strict';

    var IS_PIXY_PROD = !!window.IS_PIXY_PROD;

    var API_ENDPOINT = IS_PIXY_PROD ? 'https://api.dev.printwithpixy.com/v1' : 'http://localhost:8080/v1';
    var SITE_ENDPOINT = IS_PIXY_PROD ? 'https://secure.printwithpixy.com' : 'http://localhost:3000';
    var INSTAGRAM_ENDPOINT = '/auth/instagram';

    var SITE_HASHBANG = '/#!/';
    var AUTH_ACTIONS = {
        REAUTH: 'reauth'
    };

    /*globals document, window */
    angular
        .module('pixy')
        .constant('document', document)
        .constant('lodash', window._)
        .constant('analytics', window.analytics)
        .constant('pixyConfig', {
            API_ENDPOINT: API_ENDPOINT,
            SITE_ENDPOINT: SITE_ENDPOINT,
            SITE_HASHBANG: SITE_HASHBANG,
            INSTAGRAM_ENDPOINT: '/auth/instagram',
            // TODO change back after testing is complete
            STRIPE: {
                //KEY: IS_PIXY_PROD ? 'pk_live_QAuikbQoj5IyU9wdrUlXl62v' : 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ'
                KEY: IS_PIXY_PROD ? 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ' : 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ'
            },
            SEGMENT: {
                //KEY: IS_PIXY_PROD ? 'muRTZV1seEGRxPm6r1xswhZta9Xvvx3X' : 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk'
                KEY: IS_PIXY_PROD ? 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk' : 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk'
            },
            ENDPOINTS: {
                INSTAGRAM: {
                    AUTH: API_ENDPOINT + INSTAGRAM_ENDPOINT,
                    CONNECT: API_ENDPOINT + INSTAGRAM_ENDPOINT + '?action=' + AUTH_ACTIONS.REAUTH
                },
                CHOOSE_PLAN: SITE_ENDPOINT + SITE_HASHBANG + 'choose-a-plan',
                CONNECT: SITE_ENDPOINT + SITE_HASHBANG + 'connect',
                CONNECT_COMPLETE: SITE_ENDPOINT + SITE_HASHBANG + 'connect-complete',
                REDEEM: SITE_ENDPOINT + SITE_HASHBANG + 'redeem-step-1'
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
