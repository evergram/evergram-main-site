(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('PaymentService', PaymentService);

    PaymentService.$inject = ['$q', 'Restangular', 'stripe', 'lodash'];
    function PaymentService($q, restangular, stripe, lodash) {
        var ENDPOINT = '/payment-gateways/stripe';
        var service = {};

        service.createToken = createToken;
        service.createCustomer = createCustomer;
        service.updateCustomer = updateCustomer;

        return service;

        function createToken(card, meta) {
            var data = card;

            if (!!meta) {
                if (!!meta.firstName && !!meta.lastName) {
                    data.name = meta.firstName + ' ' + meta.lastName;
                }

                if (!!meta.address) {
                    data.address_line1 = meta.address.line1;
                    data.address_city = meta.address.suburb;
                    data.address_state = meta.address.state;
                    data.address_zip = meta.address.postcode;
                    data.address_country = meta.address.country;
                }
            }

            return stripe.card.createToken(data);
        }

        function createCustomer(user, sourceId) {
            var data = getCustomerData(user, sourceId);

            return restangular.all(ENDPOINT + '/customer').
            post(data).
            then(handleSuccess, handleError);
        }

        function updateCustomer(id, user, sourceId) {
            var data = getCustomerData(user, sourceId);

            return restangular.all(ENDPOINT + '/customer/' + id).
            customPUT(data).
            then(handleSuccess, handleError);
        }

        function getCustomerData(user, sourceId) {
            var data = {
                email: user.email,
                plan: user.billing.option,
                metadata: {
                    pixy_customer_id: user._id,
                    instagram_id: user.instagram.id,
                    first_name: user.firstName,
                    last_name: user.lastName,
                    instagram_username: user.instagram.username
                }
            };

            if (!!sourceId && !lodash.isEmpty(sourceId)) {
                data.source = sourceId;
            }

            return data;
        }

        // private functions
        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return $q.reject(error.data || error);
        }
    }
})();
