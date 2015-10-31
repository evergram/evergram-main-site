(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('paymentDetails', PaymentDirective);

    PaymentDirective.$inject = ['lodash'];
    function PaymentDirective(lodash) {
        return {
            restrict: 'EA',
            scope: {
                card: '='
            },
            templateUrl: 'app/directives/payment-details/payment-details.directive.html',
            controller: ['$scope',
                function($scope) {
                    $scope.isValidated = false;

                    this.validate = function() {
                        $scope.$broadcast('show-errors-check-validity');
                        $scope.isValidated = true;
                    };

                    this.isValid = function() {
                        return !!$scope.paymentDetailsForm.$valid;
                    };
                }],
            link: function(scope, iElement, attrs, ctrl) {
                if (!!attrs.parentForms) {
                    var parent = lodash.get(scope.$parent, attrs.parentForms);
                    if (!!parent && !!parent[attrs.parentForm]) {
                        parent[attrs.parentForm] = ctrl;
                    }
                }
            }
        };
    }
})();
