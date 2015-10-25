(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('paymentDetails', PaymentDirective);

    function PaymentDirective() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/payment-details/payment-details.directive.html'
        }
    }
})();
