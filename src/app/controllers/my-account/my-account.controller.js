(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('MyAccountController', MyAccountController);

    MyAccountController.$inject = [
        '$scope',
        'UserService',
        'ImageSetService',
        '$location',
        '$uibModal'
    ];

    function MyAccountController($scope,
                                 userService,
                                 imageSetService,
                                 $location,
                                 $uibModal) {
        var vm = this;

        vm.user = {};
        vm.imageSets = {};
        vm.limitPlanUser = false;
        vm.limit = 0;
        vm.hasPhotos = false;

        var querystring = $location.search();

        if (!!querystring.id) {
            // TODO: replace this with a $cookie based get.
            userService.findById(querystring.id).
            then(function(user) {
                vm.user = user;
                vm.user.signupCompletedOn = new Date(vm.user.signupCompletedOn);
                vm.limitPlanUser = user.billing.option.indexOf('LIMIT') > -1 ? true : false;
                if (vm.limitPlanUser) {
                    vm.limit = user.billing.option.split("-")[2];
                }
            }).
            then(function() {
                return imageSetService.getCurrent(vm.user._id);
            }).
            then(function(imageSets) {
                if (!!imageSets) {
                    vm.imageSets = imageSets;
                    if( imageSets.images.instagram.length > 0 ) {
                        vm.hasPhotos = true;
                    }
                }
            });

        } else {
            return $location.url('/login?err=' + encodeURIComponent('No id found in querystring'));
        }

        vm.editCustomerDetails = function() {
            $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'app/controllers/edit-customer.modal/edit-customer.modal.html',
                controller: 'EditCustomerModal',
                controllerAs: 'editCustomerModal',
                resolve: {
                    user: function() {
                        return vm.user;
                    }
                }
            });
        };
    }
})();
