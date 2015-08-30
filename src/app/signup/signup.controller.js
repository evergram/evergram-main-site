(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['UserService'];
    function SignupController(UserService) {
        var vm = this;

        UserService.findById('552a388c1bf668e7a97f5c78').then(function(users) {
            console.log(users);
        });
    }
})();
