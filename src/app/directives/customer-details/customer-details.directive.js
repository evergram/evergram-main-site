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
                    this.validate = function() {
                        console.log('Validating');
                        $scope.$broadcast('show-errors-check-validity');
                        if ($scope.customerDetails.$valid) {
                            console.log('Valid');
                        } else {
                            console.log('Invalid');
                        }
                    };
                }],
            link: function(scope, iElement, attrs, ctrl) {
                if (!!attrs.parentForms) {
                    var parent = lodash.get(scope.$parent, attrs.parentForms);
                    if (!!parent && !!parent[attrs.parentForm]) {
                        console.log(ctrl);
                        parent[attrs.parentForm] = ctrl;
                    }
                }
            }
        }
    }

})();
