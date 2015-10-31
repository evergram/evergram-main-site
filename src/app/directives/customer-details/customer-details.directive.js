(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('customerDetails', CustomerDirective);

    CustomerDirective.$inject = ['lodash'];
    function CustomerDirective(lodash) {
        return {
            restrict: 'EA',
            scope: {
                user: '=',
                parentForms: '@',
                parentForm: '@'
            },
            replace: true,
            templateUrl: 'app/directives/customer-details/customer-details.directive.html',
            controller: ['$scope',
                function($scope) {
                    $scope.isValidated = false;

                    this.validate = function() {
                        $scope.$broadcast('show-errors-check-validity');
                        $scope.isValidated = true;
                    };

                    this.isValid = function() {
                        return !!$scope.customerDetails.$valid;
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
