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
                PAYG: {
                    title: 'Pay per photo',
                    price: '$0.80 /PHOTO',
                    shipping: '+ Shipping from $2',
                    description: '<p>This is for you if you just want to get a few special memories sent each month. However, we\'re pretty sure that once you try us, you\'ll get excited and sign up for one of our plans.</p>',
                    code: 'PAYG'
                },
                VALUE100: {
                    title: 'Value pack',
                    price: '$11.99 /MONTH',
                    shipping: 'Includes standard shipping ',
                    description: '<p>Got a bit of an Instagram problem? Or just got a lot of photos to print? That\'s cool. We won\'t judge. So do we!</p><p>This is the plan for all you photo addicts our there. Print up to 100 photos every month from the day you signup.</p>',
                    code: 'VALUE100'
                },
                GIFT: {
                    title: 'Gift Subscription',
                    price: '6 OR 12 MONTHS',
                    shipping: '+ Free Delivery (save 17%)',
                    description: '<p>Want to be a really considerate person?</p><p>Give that special someone the gift of free photo printing for 6 or 12 months then sit back and bask in the glory of appreciation.  Includes printing of up to 100 photos per month plus free shipping.</p>',
                    code: 'GIFT'
                }
            },
            QUERYSTRING: {
                REDIRECT_URL: 'redirect_url',
                PLAN: 'plan'
            }
        });

    /** @ngInject */
})();
