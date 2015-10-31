(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('PaymentService', PaymentService);

    PaymentService.$inject = ['stripe'];
    function PaymentService(stripe) {
        var service = {};

        service.createToken = createToken;

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
    }
})();
