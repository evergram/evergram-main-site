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
                    this.validate = function() {
                        console.log('Validating');
                        $scope.$broadcast('show-errors-check-validity');
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
