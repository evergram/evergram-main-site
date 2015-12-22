(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('MyAccountController', MyAccountController);

    MyAccountController.$inject = ['pixyConfig', 'UserService'];

    function MyAccountController(pixyConfig, $scope, userService, $console) {
        
        var vm = this;

        vm.user = {};

        userService.findById(userService.findFromQueryString()).		// TODO: replace this with a $cookie based get.
        then(function(user) {
            $console.log(user); 
            vm.user = user;
        });
        
    }
})();
