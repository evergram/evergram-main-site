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

        var querystring = $location.search();

        if (!!querystring.id) {
            // TODO: replace this with a $cookie based get.
            userService.findById(querystring.id).
            then(function(user) {
                vm.user = user;
                vm.user.signupCompletedOn = new Date(vm.user.signupCompletedOn);
            }).
            then(function() {
                return imageSetService.getCurrent(vm.user._id);
            }).
            then(function(imageSets) {
                vm.imageSets = imageSets;
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
