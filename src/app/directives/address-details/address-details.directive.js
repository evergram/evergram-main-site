(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('addressDetails', AddressDirective);

    AddressDirective.$inject = ['lodash'];
    function AddressDirective(lodash) {
        return {
            restrict: 'EA',
            scope: {
                user: '='
            },
            templateUrl: 'app/directives/address-details/address-details.directive.html',
            controller: ['$scope',
                function($scope) {
                    $scope.isValidated = false;

                    this.validate = function() {
                        $scope.$broadcast('show-errors-check-validity');
                        $scope.isValidated = true;
                    };

                    this.isValid = function() {
                        return !!$scope.addressDetailsForm.$valid;
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
