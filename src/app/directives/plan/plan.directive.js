(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('plan', PlanDirective);

    function PlanDirective() {
        return {
            restrict: 'EA',
            scope: {
                code: '&'
            },
            templateUrl: 'app/directives/plan/plan.directive.html',
            controller: [
                '$scope',
                function($scope) {
                    $scope.isValidated = false;

                    this.validate = function() {
                        $scope.$broadcast('show-errors-check-validity');
                        $scope.isValidated = true;
                    };

                    this.isValid = function() {
                        return !!$scope.customerDetails.$valid;
                    };
                }
            ]
        };
    }
})();
