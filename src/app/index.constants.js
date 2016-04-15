(function() {
    'use strict';

    var IS_PIXY_PROD = !!window.IS_PIXY_PROD;

    var API_ENDPOINT = IS_PIXY_PROD ? 'https://api.dev.printwithpixy.com/v1' : 'http://localhost:8080/v1';
    var SITE_ENDPOINT = IS_PIXY_PROD ? 'https://secure.printwithpixy.com' : 'http://localhost:3000';
    var INSTAGRAM_ENDPOINT = '/auth/instagram';

    var SITE_HASHBANG = '/#/';
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
                KEY: IS_PIXY_PROD ? 'pk_live_QAuikbQoj5IyU9wdrUlXl62v' : 'pk_test_STOuGZQKq2LhVRLzSC8Qs3mJ'
            },
            SEGMENT: {
                KEY: IS_PIXY_PROD ? 'muRTZV1seEGRxPm6r1xswhZta9Xvvx3X' : 's1D3vxElH5eCPE5GvCgOYH4ISifPv8pk'
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
                'PROMO-LIMIT-10': {
                    code: 'PROMO-LIMIT-10'
                },
                'PROMO-LIMIT-20': {
                    code: 'PROMO-LIMIT-20'
                },
                'PROMOGIFT3': {
                    code: 'PROMOGIFT3'
                },
                PROMOGIFT12: {
                    code: 'PROMOGIFT12'
                },
                PROMOGIFT6: {
                    code: 'PROMOGIFT6'
                },
                GIFT3: {
                    code: 'GIFT3'
                },
                GIFT6: {
                    code: 'GIFT6'
                },
                GIFT12: {
                    code: 'GIFT12'
                }
            },
            REFERRINGUSER: {
                'cazfilmerwrites': {
                    offer: '$10 Pixy credit'
                },
                'ambermelody': {
                    offer: '$10 Pixy credit'
                },
                'designisyay': {
                    offer: '$10 Pixy credit'
                },
                'showandtellonline': {
                    offer: '$10 Pixy credit'
                },
                'pinchmebeautiful': {
                    offer: '$10 Pixy credit'
                },
                'adventuremumma': {
                    offer: '$10 Pixy credit'
                },
                'sugercoatit': {
                    offer: '$10 Pixy credit'
                },
                'inkedincolour': {
                    offer: '$10 Pixy credit'
                },
                'thelebaneseplate': {
                    offer: '$10 Pixy credit'
                },
                'kidgredients': {
                    offer: '$10 Pixy credit'
                },
                'brendonthesmilingchef': {
                    offer: '$10 Pixy credit'
                },
                'the.thud': {
                    offer: '$10 Pixy credit'
                },
                'adventure.baby': {
                    offer: '$10 Pixy credit'
                },
                'rarepearstudio': {
                    offer: '$10 Pixy credit'
                },
                'cookerandalooker': {
                    offer: '$10 Pixy credit'
                },
                'craftsmumship': {
                    offer: '$10 Pixy credit'
                },
                'allornothing.au': {
                    offer: '$10 Pixy credit'
                },
                'michaelandcarlene': {
                    offer: '$10 Pixy credit'
                },
                'mini_haha': {
                    offer: '$10 Pixy credit'
                },
                'rachael_tiernan': {
                    offer: '$10 Pixy credit'
                },
                'thekidbucketlist': {
                    offer: '$10 Pixy credit'
                }
            },
            QUERYSTRING: {
                ACTION: 'action',
                REDIRECT_URL: 'redirect_url',
                REFERRING_USER: 'referring_user',
                PLAN: 'plan'
            }
        });
    /** @ngInject */
})();
