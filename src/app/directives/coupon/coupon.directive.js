(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('couponDetails', CouponDirective);

    CouponDirective.$inject = ['lodash','ReferringUserService'];
    function CouponDirective(lodash, referringUserService) {
        return {
            restrict: 'EA',
            scope: {
                parentForms: '@',
                parentForm: '@'
            },
            replace: true,
            templateUrl: 'app/directives/coupon/coupon.directive.html',
            controller: ['$scope',
                function($scope) {
                    var vm = $scope;
                    vm.referring_user = referringUserService.getFromQueryString() || '';
                    vm.isValid = false;

                    vm.validateCoupon = function() {
                        // check if code is present in contants.
                        var referrer = referringUserService.get(vm.referring_user);

                        if(!!referrer) { // yes
                            // do something to set referring user and show message about offer to user.
                            vm.isValid = true;
                            vm.offer = referrer.offer;
                            //return true;
                        } else {
                            //no
                            vm.isValid = false;
                            vm.offer = '';
                        }
                    };

                    this.validate = function() {
                        vm.validateCoupon();
                        $scope.$broadcast('show-errors-check-validity');    // TODO: Do we need this?
                        $scope.isValidated = true;    // TODO: Do we need this?
                    };

                    this.isValid = function() {
                        if(!!vm.referring_user) {
                            return vm.isValid;
                        } else {
                            return true;
                        }
                    };

                    this.getCoupon = function() {
                        return vm.referring_user;
                    };

                    if(!!vm.referring_user) {   // if referring user passed via querystring, verify it onload.
                        this.validate();
                    }
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
